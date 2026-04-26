import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareBotManagementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management#zone_id DataCloudflareBotManagement#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareBotManagementStaleZoneConfiguration {
}
export declare function dataCloudflareBotManagementStaleZoneConfigurationToTerraform(struct?: DataCloudflareBotManagementStaleZoneConfiguration): any;
export declare function dataCloudflareBotManagementStaleZoneConfigurationToHclTerraform(struct?: DataCloudflareBotManagementStaleZoneConfiguration): any;
export declare class DataCloudflareBotManagementStaleZoneConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareBotManagementStaleZoneConfiguration | undefined;
    set internalValue(value: DataCloudflareBotManagementStaleZoneConfiguration | undefined);
    get fightMode(): any;
    get optimizeWordpress(): any;
    get sbfmDefinitelyAutomated(): any;
    get sbfmLikelyAutomated(): any;
    get sbfmStaticResourceProtection(): any;
    get sbfmVerifiedBots(): any;
    get suppressSessionScore(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management cloudflare_bot_management}
*/
export declare class DataCloudflareBotManagement extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_bot_management";
    /**
    * Generates CDKTF code for importing a DataCloudflareBotManagement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareBotManagement to import
    * @param importFromId The id of the existing DataCloudflareBotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareBotManagement to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management cloudflare_bot_management} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareBotManagementConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareBotManagementConfig);
    get aiBotsProtection(): any;
    get autoUpdateModel(): any;
    get bmCookieEnabled(): any;
    get cfRobotsVariant(): any;
    get contentBotsProtection(): any;
    get crawlerProtection(): any;
    get enableJs(): any;
    get fightMode(): any;
    get id(): any;
    get isRobotsTxtManaged(): any;
    get optimizeWordpress(): any;
    get sbfmDefinitelyAutomated(): any;
    get sbfmLikelyAutomated(): any;
    get sbfmStaticResourceProtection(): any;
    get sbfmVerifiedBots(): any;
    private _staleZoneConfiguration;
    get staleZoneConfiguration(): DataCloudflareBotManagementStaleZoneConfigurationOutputReference;
    get suppressSessionScore(): any;
    get usingLatestModel(): any;
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
