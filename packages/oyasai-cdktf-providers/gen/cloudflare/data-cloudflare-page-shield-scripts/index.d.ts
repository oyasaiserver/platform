import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageShieldScriptsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts#script_id DataCloudflarePageShieldScripts#script_id}
    */
    readonly scriptId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts#zone_id DataCloudflarePageShieldScripts#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflarePageShieldScriptsVersions {
}
export declare function dataCloudflarePageShieldScriptsVersionsToTerraform(struct?: DataCloudflarePageShieldScriptsVersions): any;
export declare function dataCloudflarePageShieldScriptsVersionsToHclTerraform(struct?: DataCloudflarePageShieldScriptsVersions): any;
export declare class DataCloudflarePageShieldScriptsVersionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePageShieldScriptsVersions | undefined;
    set internalValue(value: DataCloudflarePageShieldScriptsVersions | undefined);
    get cryptominingScore(): any;
    get dataflowScore(): any;
    get fetchedAt(): any;
    get hash(): any;
    get jsIntegrityScore(): any;
    get magecartScore(): any;
    get malwareScore(): any;
    get obfuscationScore(): any;
}
export declare class DataCloudflarePageShieldScriptsVersionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflarePageShieldScriptsVersionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts}
*/
export declare class DataCloudflarePageShieldScripts extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_shield_scripts";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldScripts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldScripts to import
    * @param importFromId The id of the existing DataCloudflarePageShieldScripts that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldScripts to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldScriptsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePageShieldScriptsConfig);
    get addedAt(): any;
    get cryptominingScore(): any;
    get dataflowScore(): any;
    get domainReportedMalicious(): any;
    get fetchedAt(): any;
    get firstPageUrl(): any;
    get firstSeenAt(): any;
    get hash(): any;
    get host(): any;
    get id(): any;
    get jsIntegrityScore(): any;
    get lastSeenAt(): any;
    get magecartScore(): any;
    get maliciousDomainCategories(): any;
    get maliciousUrlCategories(): any;
    get malwareScore(): any;
    get obfuscationScore(): any;
    get pageUrls(): any;
    private _scriptId?;
    get scriptId(): string;
    set scriptId(value: string);
    get scriptIdInput(): string;
    get url(): any;
    get urlContainsCdnCgiPath(): any;
    get urlReportedMalicious(): any;
    private _versions;
    get versions(): DataCloudflarePageShieldScriptsVersionsList;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
