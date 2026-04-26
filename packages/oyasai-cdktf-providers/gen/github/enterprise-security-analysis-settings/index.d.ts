import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EnterpriseSecurityAnalysisSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether GitHub Advanced Security is automatically enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#advanced_security_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#advanced_security_enabled_for_new_repositories}
    */
    readonly advancedSecurityEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    * The slug of the enterprise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#enterprise_slug EnterpriseSecurityAnalysisSettings#enterprise_slug}
    */
    readonly enterpriseSlug: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#id EnterpriseSecurityAnalysisSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Whether secret scanning is automatically enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_enabled_for_new_repositories}
    */
    readonly secretScanningEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    * Custom URL for secret scanning push protection bypass instructions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_custom_link EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_custom_link}
    */
    readonly secretScanningPushProtectionCustomLink?: string;
    /**
    * Whether secret scanning push protection is automatically enabled for new repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_enabled_for_new_repositories}
    */
    readonly secretScanningPushProtectionEnabledForNewRepositories?: boolean | cdktf.IResolvable;
    /**
    * Whether secret scanning validity checks are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_validity_checks_enabled EnterpriseSecurityAnalysisSettings#secret_scanning_validity_checks_enabled}
    */
    readonly secretScanningValidityChecksEnabled?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings}
*/
export declare class EnterpriseSecurityAnalysisSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_enterprise_security_analysis_settings";
    /**
    * Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseSecurityAnalysisSettings to import
    * @param importFromId The id of the existing EnterpriseSecurityAnalysisSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseSecurityAnalysisSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseSecurityAnalysisSettingsConfig
    */
    constructor(scope: Construct, id: string, config: EnterpriseSecurityAnalysisSettingsConfig);
    private _advancedSecurityEnabledForNewRepositories?;
    get advancedSecurityEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set advancedSecurityEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetAdvancedSecurityEnabledForNewRepositories(): void;
    get advancedSecurityEnabledForNewRepositoriesInput(): any;
    private _enterpriseSlug?;
    get enterpriseSlug(): string;
    set enterpriseSlug(value: string);
    get enterpriseSlugInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _secretScanningEnabledForNewRepositories?;
    get secretScanningEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set secretScanningEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetSecretScanningEnabledForNewRepositories(): void;
    get secretScanningEnabledForNewRepositoriesInput(): any;
    private _secretScanningPushProtectionCustomLink?;
    get secretScanningPushProtectionCustomLink(): string;
    set secretScanningPushProtectionCustomLink(value: string);
    resetSecretScanningPushProtectionCustomLink(): void;
    get secretScanningPushProtectionCustomLinkInput(): string;
    private _secretScanningPushProtectionEnabledForNewRepositories?;
    get secretScanningPushProtectionEnabledForNewRepositories(): boolean | cdktf.IResolvable;
    set secretScanningPushProtectionEnabledForNewRepositories(value: boolean | cdktf.IResolvable);
    resetSecretScanningPushProtectionEnabledForNewRepositories(): void;
    get secretScanningPushProtectionEnabledForNewRepositoriesInput(): any;
    private _secretScanningValidityChecksEnabled?;
    get secretScanningValidityChecksEnabled(): boolean | cdktf.IResolvable;
    set secretScanningValidityChecksEnabled(value: boolean | cdktf.IResolvable);
    resetSecretScanningValidityChecksEnabled(): void;
    get secretScanningValidityChecksEnabledInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
