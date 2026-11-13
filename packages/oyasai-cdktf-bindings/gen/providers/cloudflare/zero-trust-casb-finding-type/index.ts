// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustCasbFindingTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}
  */
  readonly accountId: string;
  /**
  * When true, this finding type applies to every current and future integration of the vendor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#applies_to_all_integrations ZeroTrustCasbFindingType#applies_to_all_integrations}
  */
  readonly appliesToAllIntegrations: boolean | cdktf.IResolvable;
  /**
  * Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_class ZeroTrustCasbFindingType#asset_class}
  */
  readonly assetClass: string;
  /**
  * Canonical vendor enum for the platform whose assets this finding type evaluates.
  * Available values: "ANTHROPIC", "AWS", "BITBUCKET", "BOX", "CONFLUENCE", "DROPBOX", "GITHUB", "GOOGLE_CLOUD_PLATFORM", "GOOGLE_WORKSPACE", "JIRA", "MICROSOFT", "OPENAI", "SALESFORCE", "SERVICENOW", "SLACK", "ZOOM".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_vendor ZeroTrustCasbFindingType#asset_vendor}
  */
  readonly assetVendor: string;
  /**
  * Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#description ZeroTrustCasbFindingType#description}
  */
  readonly description: string;
  /**
  * Rego expression body for the policy. `package cloudflare.casb.custom` and `import rego.v1` are added automatically. Do not include package or import declarations. This field cannot be changed after creation. Maximum 4096 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#expression ZeroTrustCasbFindingType#expression}
  */
  readonly expression: string;
  /**
  * Required and non-empty when applies_to_all_integrations is false; omit when it is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#integration_ids ZeroTrustCasbFindingType#integration_ids}
  */
  readonly integrationIds?: string[];
  /**
  * Human-readable name for the finding type. Maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#name ZeroTrustCasbFindingType#name}
  */
  readonly name: string;
  /**
  * Default severity used when no integration-specific severity override exists.
  * Available values: "Critical", "High", "Medium", "Low".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#severity ZeroTrustCasbFindingType#severity}
  */
  readonly severity: string;
}
export interface ZeroTrustCasbFindingTypeCategory {
}

export function zeroTrustCasbFindingTypeCategoryToTerraform(struct?: ZeroTrustCasbFindingTypeCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustCasbFindingTypeCategoryToHclTerraform(struct?: ZeroTrustCasbFindingTypeCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustCasbFindingTypeCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbFindingTypeCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbFindingTypeCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // observation - computed: true, optional: false, required: false
  public get observation() {
    return this.getStringAttribute('observation');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}
*/
export class ZeroTrustCasbFindingType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_casb_finding_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustCasbFindingType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustCasbFindingType to import
  * @param importFromId The id of the existing ZeroTrustCasbFindingType that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustCasbFindingType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_casb_finding_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustCasbFindingTypeConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustCasbFindingTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_casb_finding_type',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._appliesToAllIntegrations = config.appliesToAllIntegrations;
    this._assetClass = config.assetClass;
    this._assetVendor = config.assetVendor;
    this._description = config.description;
    this._expression = config.expression;
    this._integrationIds = config.integrationIds;
    this._name = config.name;
    this._severity = config.severity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // applies_to_all_integrations - computed: false, optional: false, required: true
  private _appliesToAllIntegrations?: boolean | cdktf.IResolvable; 
  public get appliesToAllIntegrations() {
    return this.getBooleanAttribute('applies_to_all_integrations');
  }
  public set appliesToAllIntegrations(value: boolean | cdktf.IResolvable) {
    this._appliesToAllIntegrations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToAllIntegrationsInput() {
    return this._appliesToAllIntegrations;
  }

  // asset_class - computed: false, optional: false, required: true
  private _assetClass?: string; 
  public get assetClass() {
    return this.getStringAttribute('asset_class');
  }
  public set assetClass(value: string) {
    this._assetClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetClassInput() {
    return this._assetClass;
  }

  // asset_vendor - computed: false, optional: false, required: true
  private _assetVendor?: string; 
  public get assetVendor() {
    return this.getStringAttribute('asset_vendor');
  }
  public set assetVendor(value: string) {
    this._assetVendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetVendorInput() {
    return this._assetVendor;
  }

  // category - computed: true, optional: false, required: false
  private _category = new ZeroTrustCasbFindingTypeCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_ids - computed: true, optional: true, required: false
  private _integrationIds?: string[]; 
  public get integrationIds() {
    return this.getListAttribute('integration_ids');
  }
  public set integrationIds(value: string[]) {
    this._integrationIds = value;
  }
  public resetIntegrationIds() {
    this._integrationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdsInput() {
    return this._integrationIds;
  }

  // match_count - computed: true, optional: false, required: false
  public get matchCount() {
    return this.getNumberAttribute('match_count');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // quarantined - computed: true, optional: false, required: false
  public get quarantined() {
    return this.getBooleanAttribute('quarantined');
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      applies_to_all_integrations: cdktf.booleanToTerraform(this._appliesToAllIntegrations),
      asset_class: cdktf.stringToTerraform(this._assetClass),
      asset_vendor: cdktf.stringToTerraform(this._assetVendor),
      description: cdktf.stringToTerraform(this._description),
      expression: cdktf.stringToTerraform(this._expression),
      integration_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrationIds),
      name: cdktf.stringToTerraform(this._name),
      severity: cdktf.stringToTerraform(this._severity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applies_to_all_integrations: {
        value: cdktf.booleanToHclTerraform(this._appliesToAllIntegrations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      asset_class: {
        value: cdktf.stringToHclTerraform(this._assetClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_vendor: {
        value: cdktf.stringToHclTerraform(this._assetVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
