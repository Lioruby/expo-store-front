package expo.modules.storefront

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import com.android.billingclient.api.*
import android.content.Context

class ExpoStoreFrontModule : Module() {
  private lateinit var billingClient: BillingClient

  override fun definition() = ModuleDefinition {
    Name("ExpoStoreFrontModule")

    Function("getCountryCode") {
      getCountryCode()
    }

    AsyncFunction("initializeBillingClient") {
      initializeBillingClient()
    }
  }

  private fun initializeBillingClient() {
    val context: Context = appContext.reactContext ?: throw IllegalStateException("React context is null")
    billingClient = BillingClient.newBuilder(context).build()
  }

  private fun getCountryCode(): String {
    var countryCode = "Unknown"
    val getBillingConfigParams = GetBillingConfigParams.newBuilder().build()
    billingClient.getBillingConfigAsync(getBillingConfigParams,
      object : BillingConfigResponseListener {
        override fun onBillingConfigResponse(
            billingResult: BillingResult,
            billingConfig: BillingConfig?
        ) {
            if (billingResult.responseCode == BillingClient.BillingResponseCode.OK
                && billingConfig != null) {
                countryCode = billingConfig.countryCode
            }
        }
    })

    return countryCode
  }
}