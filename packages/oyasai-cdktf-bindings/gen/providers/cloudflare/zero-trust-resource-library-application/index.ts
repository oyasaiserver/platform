// https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustResourceLibraryApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}
  */
  readonly accountId: string;
  /**
  * Returns the category ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#category_id ZeroTrustResourceLibraryApplication#category_id}
  */
  readonly categoryId: number;
  /**
  * Hostnames matched by the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#hostnames ZeroTrustResourceLibraryApplication#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Returns the human readable ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#human_id ZeroTrustResourceLibraryApplication#human_id}
  */
  readonly humanId: string;
  /**
  * IP subnets matched by the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#ip_subnets ZeroTrustResourceLibraryApplication#ip_subnets}
  */
  readonly ipSubnets?: string[];
  /**
  * Returns the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#name ZeroTrustResourceLibraryApplication#name}
  */
  readonly name: string;
  /**
  * Port and protocol pairs matched by the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#port_protocols ZeroTrustResourceLibraryApplication#port_protocols}
  */
  readonly portProtocols?: string[];
  /**
  * Support domains matched by the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#support_domains ZeroTrustResourceLibraryApplication#support_domains}
  */
  readonly supportDomains?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}
*/
export class ZeroTrustResourceLibraryApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_resource_library_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustResourceLibraryApplication to import
  * @param importFromId The id of the existing ZeroTrustResourceLibraryApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustResourceLibraryApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_resource_library_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustResourceLibraryApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustResourceLibraryApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_resource_library_application',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.25.0'
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
    this._categoryId = config.categoryId;
    this._hostnames = config.hostnames;
    this._humanId = config.humanId;
    this._ipSubnets = config.ipSubnets;
    this._name = config.name;
    this._portProtocols = config.portProtocols;
    this._supportDomains = config.supportDomains;
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

  // application_confidence_score - computed: true, optional: false, required: false
  public get applicationConfidenceScore() {
    return this.getNumberAttribute('application_confidence_score');
  }

  // application_score_composition - computed: true, optional: false, required: false
  public get applicationScoreComposition() {
    return this.getStringAttribute('application_score_composition');
  }

  // application_source - computed: true, optional: false, required: false
  public get applicationSource() {
    return this.getStringAttribute('application_source');
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // application_type_description - computed: true, optional: false, required: false
  public get applicationTypeDescription() {
    return this.getStringAttribute('application_type_description');
  }

  // category_id - computed: false, optional: false, required: true
  private _categoryId?: number; 
  public get categoryId() {
    return this.getNumberAttribute('category_id');
  }
  public set categoryId(value: number) {
    this._categoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdInput() {
    return this._categoryId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // gen_ai_score - computed: true, optional: false, required: false
  public get genAiScore() {
    return this.getNumberAttribute('gen_ai_score');
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('hostnames'));
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // human_id - computed: false, optional: false, required: true
  private _humanId?: string; 
  public get humanId() {
    return this.getStringAttribute('human_id');
  }
  public set humanId(value: string) {
    this._humanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanIdInput() {
    return this._humanId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_subnets - computed: false, optional: true, required: false
  private _ipSubnets?: string[]; 
  public get ipSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_subnets'));
  }
  public set ipSubnets(value: string[]) {
    this._ipSubnets = value;
  }
  public resetIpSubnets() {
    this._ipSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetsInput() {
    return this._ipSubnets;
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

  // port_protocols - computed: false, optional: true, required: false
  private _portProtocols?: string[]; 
  public get portProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('port_protocols'));
  }
  public set portProtocols(value: string[]) {
    this._portProtocols = value;
  }
  public resetPortProtocols() {
    this._portProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portProtocolsInput() {
    return this._portProtocols;
  }

  // support_domains - computed: false, optional: true, required: false
  private _supportDomains?: string[]; 
  public get supportDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('support_domains'));
  }
  public set supportDomains(value: string[]) {
    this._supportDomains = value;
  }
  public resetSupportDomains() {
    this._supportDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportDomainsInput() {
    return this._supportDomains;
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return cdktf.Fn.tolist(this.getListAttribute('supported'));
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      category_id: cdktf.numberToTerraform(this._categoryId),
      hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
      human_id: cdktf.stringToTerraform(this._humanId),
      ip_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSubnets),
      name: cdktf.stringToTerraform(this._name),
      port_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portProtocols),
      support_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportDomains),
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
      category_id: {
        value: cdktf.numberToHclTerraform(this._categoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      human_id: {
        value: cdktf.stringToHclTerraform(this._humanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipSubnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      support_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
