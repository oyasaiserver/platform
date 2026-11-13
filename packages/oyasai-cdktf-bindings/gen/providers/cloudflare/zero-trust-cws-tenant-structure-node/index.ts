// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustCwsTenantStructureNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID (32-character hexadecimal string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#account_id ZeroTrustCwsTenantStructureNode#account_id}
  */
  readonly accountId: string;
  /**
  * Display name (e.g. an OU or account name), mutable. Optional; empty by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#name ZeroTrustCwsTenantStructureNode#name}
  */
  readonly name?: string;
  /**
  * Cloud-native identifier of this node, unique within the structure; the parent-reference target. Shape depends on the structure's application. Immutable after create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#native_id ZeroTrustCwsTenantStructureNode#native_id}
  */
  readonly nativeId: string;
  /**
  * Position in the tree. Legal values depend on the structure's application (aws: root/ou/account; cloudflare: org/account/zone). At most one root per structure. Immutable after create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#node_kind ZeroTrustCwsTenantStructureNode#node_kind}
  */
  readonly nodeKind: string;
  /**
  * Native ID of this node's parent. Required for non-root nodes and omitted for the root. The parent must be in the same structure and able to contain this node kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#parent ZeroTrustCwsTenantStructureNode#parent}
  */
  readonly parent?: string;
  /**
  * ID of the parent tenant structure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#structure_id ZeroTrustCwsTenantStructureNode#structure_id}
  */
  readonly structureId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node}
*/
export class ZeroTrustCwsTenantStructureNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_cws_tenant_structure_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustCwsTenantStructureNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustCwsTenantStructureNode to import
  * @param importFromId The id of the existing ZeroTrustCwsTenantStructureNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustCwsTenantStructureNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_cws_tenant_structure_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustCwsTenantStructureNodeConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustCwsTenantStructureNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_cws_tenant_structure_node',
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
    this._name = config.name;
    this._nativeId = config.nativeId;
    this._nodeKind = config.nodeKind;
    this._parent = config.parent;
    this._structureId = config.structureId;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // native_id - computed: false, optional: false, required: true
  private _nativeId?: string; 
  public get nativeId() {
    return this.getStringAttribute('native_id');
  }
  public set nativeId(value: string) {
    this._nativeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeIdInput() {
    return this._nativeId;
  }

  // node_kind - computed: false, optional: false, required: true
  private _nodeKind?: string; 
  public get nodeKind() {
    return this.getStringAttribute('node_kind');
  }
  public set nodeKind(value: string) {
    this._nodeKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKindInput() {
    return this._nodeKind;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // structure_id - computed: false, optional: false, required: true
  private _structureId?: string; 
  public get structureId() {
    return this.getStringAttribute('structure_id');
  }
  public set structureId(value: string) {
    this._structureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structureIdInput() {
    return this._structureId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      native_id: cdktf.stringToTerraform(this._nativeId),
      node_kind: cdktf.stringToTerraform(this._nodeKind),
      parent: cdktf.stringToTerraform(this._parent),
      structure_id: cdktf.stringToTerraform(this._structureId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_id: {
        value: cdktf.stringToHclTerraform(this._nativeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_kind: {
        value: cdktf.stringToHclTerraform(this._nodeKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      structure_id: {
        value: cdktf.stringToHclTerraform(this._structureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
