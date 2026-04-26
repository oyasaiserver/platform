import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountDnsSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings#account_id DataCloudflareAccountDnsSettings#account_id}
    */
    readonly accountId?: string;
}
export interface DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns {
}
export declare function dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns): any;
export declare function dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns): any;
export declare class DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns | undefined;
    set internalValue(value: DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns | undefined);
    get referenceZoneId(): any;
}
export interface DataCloudflareAccountDnsSettingsZoneDefaultsNameservers {
}
export declare function dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsNameservers): any;
export declare function dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsNameservers): any;
export declare class DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountDnsSettingsZoneDefaultsNameservers | undefined;
    set internalValue(value: DataCloudflareAccountDnsSettingsZoneDefaultsNameservers | undefined);
    get type(): any;
}
export interface DataCloudflareAccountDnsSettingsZoneDefaultsSoa {
}
export declare function dataCloudflareAccountDnsSettingsZoneDefaultsSoaToTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsSoa): any;
export declare function dataCloudflareAccountDnsSettingsZoneDefaultsSoaToHclTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaultsSoa): any;
export declare class DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountDnsSettingsZoneDefaultsSoa | undefined;
    set internalValue(value: DataCloudflareAccountDnsSettingsZoneDefaultsSoa | undefined);
    get expire(): any;
    get minTtl(): any;
    get mname(): any;
    get refresh(): any;
    get retry(): any;
    get rname(): any;
    get ttl(): any;
}
export interface DataCloudflareAccountDnsSettingsZoneDefaults {
}
export declare function dataCloudflareAccountDnsSettingsZoneDefaultsToTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaults): any;
export declare function dataCloudflareAccountDnsSettingsZoneDefaultsToHclTerraform(struct?: DataCloudflareAccountDnsSettingsZoneDefaults): any;
export declare class DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountDnsSettingsZoneDefaults | undefined;
    set internalValue(value: DataCloudflareAccountDnsSettingsZoneDefaults | undefined);
    get flattenAllCnames(): any;
    get foundationDns(): any;
    private _internalDns;
    get internalDns(): DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference;
    get multiProvider(): any;
    private _nameservers;
    get nameservers(): DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference;
    get nsTtl(): any;
    get secondaryOverrides(): any;
    private _soa;
    get soa(): DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference;
    get zoneMode(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings}
*/
export declare class DataCloudflareAccountDnsSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_dns_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettings to import
    * @param importFromId The id of the existing DataCloudflareAccountDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountDnsSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountDnsSettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get enforceDnsOnly(): any;
    private _zoneDefaults;
    get zoneDefaults(): DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
