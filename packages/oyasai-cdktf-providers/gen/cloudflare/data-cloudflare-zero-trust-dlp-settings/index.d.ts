import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_settings#account_id DataCloudflareZeroTrustDlpSettings#account_id}
    */
    readonly accountId: string;
}
export interface DataCloudflareZeroTrustDlpSettingsPayloadLogging {
}
export declare function dataCloudflareZeroTrustDlpSettingsPayloadLoggingToTerraform(struct?: DataCloudflareZeroTrustDlpSettingsPayloadLogging): any;
export declare function dataCloudflareZeroTrustDlpSettingsPayloadLoggingToHclTerraform(struct?: DataCloudflareZeroTrustDlpSettingsPayloadLogging): any;
export declare class DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpSettingsPayloadLogging | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpSettingsPayloadLogging | undefined);
    get maskingLevel(): any;
    get publicKey(): any;
    get updatedAt(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings}
*/
export declare class DataCloudflareZeroTrustDlpSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpSettings to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpSettingsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpSettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get aiContextAnalysis(): any;
    get id(): any;
    get ocr(): any;
    private _payloadLogging;
    get payloadLogging(): DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
