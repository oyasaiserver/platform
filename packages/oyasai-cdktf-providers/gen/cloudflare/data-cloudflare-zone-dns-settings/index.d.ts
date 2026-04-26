import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneDnsSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dns_settings#zone_id DataCloudflareZoneDnsSettings#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZoneDnsSettingsInternalDns {
}
export declare function dataCloudflareZoneDnsSettingsInternalDnsToTerraform(struct?: DataCloudflareZoneDnsSettingsInternalDns): any;
export declare function dataCloudflareZoneDnsSettingsInternalDnsToHclTerraform(struct?: DataCloudflareZoneDnsSettingsInternalDns): any;
export declare class DataCloudflareZoneDnsSettingsInternalDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneDnsSettingsInternalDns | undefined;
    set internalValue(value: DataCloudflareZoneDnsSettingsInternalDns | undefined);
    get referenceZoneId(): any;
}
export interface DataCloudflareZoneDnsSettingsNameservers {
}
export declare function dataCloudflareZoneDnsSettingsNameserversToTerraform(struct?: DataCloudflareZoneDnsSettingsNameservers): any;
export declare function dataCloudflareZoneDnsSettingsNameserversToHclTerraform(struct?: DataCloudflareZoneDnsSettingsNameservers): any;
export declare class DataCloudflareZoneDnsSettingsNameserversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneDnsSettingsNameservers | undefined;
    set internalValue(value: DataCloudflareZoneDnsSettingsNameservers | undefined);
    get nsSet(): any;
    get type(): any;
}
export interface DataCloudflareZoneDnsSettingsSoa {
}
export declare function dataCloudflareZoneDnsSettingsSoaToTerraform(struct?: DataCloudflareZoneDnsSettingsSoa): any;
export declare function dataCloudflareZoneDnsSettingsSoaToHclTerraform(struct?: DataCloudflareZoneDnsSettingsSoa): any;
export declare class DataCloudflareZoneDnsSettingsSoaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneDnsSettingsSoa | undefined;
    set internalValue(value: DataCloudflareZoneDnsSettingsSoa | undefined);
    get expire(): any;
    get minTtl(): any;
    get mname(): any;
    get refresh(): any;
    get retry(): any;
    get rname(): any;
    get ttl(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dns_settings cloudflare_zone_dns_settings}
*/
export declare class DataCloudflareZoneDnsSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_dns_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneDnsSettings to import
    * @param importFromId The id of the existing DataCloudflareZoneDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneDnsSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dns_settings cloudflare_zone_dns_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneDnsSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneDnsSettingsConfig);
    get flattenAllCnames(): any;
    get foundationDns(): any;
    private _internalDns;
    get internalDns(): DataCloudflareZoneDnsSettingsInternalDnsOutputReference;
    get multiProvider(): any;
    private _nameservers;
    get nameservers(): DataCloudflareZoneDnsSettingsNameserversOutputReference;
    get nsTtl(): any;
    get secondaryOverrides(): any;
    private _soa;
    get soa(): DataCloudflareZoneDnsSettingsSoaOutputReference;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    get zoneMode(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
