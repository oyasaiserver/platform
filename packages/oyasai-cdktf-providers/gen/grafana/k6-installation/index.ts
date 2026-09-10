// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K6InstallationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deprecated: The [Grafana Cloud access policy](https://grafana.com/docs/grafana-cloud/account-management/authentication-and-permissions/access-policies/) token. It is no longer used to install the k6 App and can be safely removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation#cloud_access_policy_token K6Installation#cloud_access_policy_token}
  */
  readonly cloudAccessPolicyToken?: string;
  /**
  * The [service account](https://grafana.com/docs/grafana/latest/administration/service-accounts/) token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation#grafana_sa_token K6Installation#grafana_sa_token}
  */
  readonly grafanaSaToken: string;
  /**
  * The user to use for the installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation#grafana_user K6Installation#grafana_user}
  */
  readonly grafanaUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation#id K6Installation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Grafana Cloud k6 API url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation#k6_api_url K6Installation#k6_api_url}
  */
  readonly k6ApiUrl?: string;
  /**
  * The identifier of the stack to install k6 on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation#stack_id K6Installation#stack_id}
  */
  readonly stackId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation grafana_k6_installation}
*/
export class K6Installation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_k6_installation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K6Installation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K6Installation to import
  * @param importFromId The id of the existing K6Installation that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K6Installation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_k6_installation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_installation grafana_k6_installation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K6InstallationConfig
  */
  public constructor(scope: Construct, id: string, config: K6InstallationConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_k6_installation',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAccessPolicyToken = config.cloudAccessPolicyToken;
    this._grafanaSaToken = config.grafanaSaToken;
    this._grafanaUser = config.grafanaUser;
    this._id = config.id;
    this._k6ApiUrl = config.k6ApiUrl;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_access_policy_token - computed: false, optional: true, required: false
  private _cloudAccessPolicyToken?: string; 
  public get cloudAccessPolicyToken() {
    return this.getStringAttribute('cloud_access_policy_token');
  }
  public set cloudAccessPolicyToken(value: string) {
    this._cloudAccessPolicyToken = value;
  }
  public resetCloudAccessPolicyToken() {
    this._cloudAccessPolicyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccessPolicyTokenInput() {
    return this._cloudAccessPolicyToken;
  }

  // grafana_sa_token - computed: false, optional: false, required: true
  private _grafanaSaToken?: string; 
  public get grafanaSaToken() {
    return this.getStringAttribute('grafana_sa_token');
  }
  public set grafanaSaToken(value: string) {
    this._grafanaSaToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaSaTokenInput() {
    return this._grafanaSaToken;
  }

  // grafana_user - computed: false, optional: false, required: true
  private _grafanaUser?: string; 
  public get grafanaUser() {
    return this.getStringAttribute('grafana_user');
  }
  public set grafanaUser(value: string) {
    this._grafanaUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaUserInput() {
    return this._grafanaUser;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // k6_access_token - computed: true, optional: false, required: false
  public get k6AccessToken() {
    return this.getStringAttribute('k6_access_token');
  }

  // k6_api_url - computed: true, optional: true, required: false
  private _k6ApiUrl?: string; 
  public get k6ApiUrl() {
    return this.getStringAttribute('k6_api_url');
  }
  public set k6ApiUrl(value: string) {
    this._k6ApiUrl = value;
  }
  public resetK6ApiUrl() {
    this._k6ApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k6ApiUrlInput() {
    return this._k6ApiUrl;
  }

  // k6_organization - computed: true, optional: false, required: false
  public get k6Organization() {
    return this.getStringAttribute('k6_organization');
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_access_policy_token: cdktf.stringToTerraform(this._cloudAccessPolicyToken),
      grafana_sa_token: cdktf.stringToTerraform(this._grafanaSaToken),
      grafana_user: cdktf.stringToTerraform(this._grafanaUser),
      id: cdktf.stringToTerraform(this._id),
      k6_api_url: cdktf.stringToTerraform(this._k6ApiUrl),
      stack_id: cdktf.stringToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_access_policy_token: {
        value: cdktf.stringToHclTerraform(this._cloudAccessPolicyToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_sa_token: {
        value: cdktf.stringToHclTerraform(this._grafanaSaToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_user: {
        value: cdktf.stringToHclTerraform(this._grafanaUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k6_api_url: {
        value: cdktf.stringToHclTerraform(this._k6ApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
