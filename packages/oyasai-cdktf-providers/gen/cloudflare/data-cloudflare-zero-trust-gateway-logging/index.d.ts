import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustGatewayLoggingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_logging#account_id DataCloudflareZeroTrustGatewayLogging#account_id}
    */
    readonly accountId?: string;
}
export interface DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns {
}
export declare function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns): any;
export declare function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns): any;
export declare class DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDns | undefined);
    get logAll(): any;
    get logBlocks(): any;
}
export interface DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp {
}
export declare function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp): any;
export declare function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp): any;
export declare class DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttp | undefined);
    get logAll(): any;
    get logBlocks(): any;
}
export interface DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4 {
}
export declare function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4): any;
export declare function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4): any;
export declare class DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4 | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4 | undefined);
    get logAll(): any;
    get logBlocks(): any;
}
export interface DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType {
}
export declare function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType): any;
export declare function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(struct?: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType): any;
export declare class DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType | undefined);
    private _dns;
    get dns(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference;
    private _http;
    get http(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference;
    private _l4;
    get l4(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}
*/
export declare class DataCloudflareZeroTrustGatewayLogging extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_logging";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayLogging to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayLogging to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayLoggingConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustGatewayLoggingConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    get redactPii(): any;
    private _settingsByRuleType;
    get settingsByRuleType(): DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
