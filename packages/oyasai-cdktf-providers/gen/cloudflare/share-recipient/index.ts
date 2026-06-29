// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/share_recipient
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShareRecipientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/share_recipient#account_id ShareRecipient#account_id}
  */
  readonly accountId: string;
  /**
  * Organization identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/share_recipient#organization_id ShareRecipient#organization_id}
  */
  readonly organizationId?: string;
  /**
  * The account that will receive the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/share_recipient#recipient_account_id ShareRecipient#recipient_account_id}
  */
  readonly recipientAccountId?: string;
  /**
  * Share identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/share_recipient#share_id ShareRecipient#share_id}
  */
  readonly shareId: string;
}
export interface ShareRecipientResources {
}

export function shareRecipientResourcesToTerraform(struct?: ShareRecipientResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function shareRecipientResourcesToHclTerraform(struct?: ShareRecipientResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ShareRecipientResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ShareRecipientResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShareRecipientResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getNumberAttribute('resource_version');
  }

  // terminal - computed: true, optional: false, required: false
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
}

export class ShareRecipientResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ShareRecipientResourcesOutputReference {
    return new ShareRecipientResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/share_recipient cloudflare_share_recipient}
*/
export class ShareRecipient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_share_recipient";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShareRecipient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShareRecipient to import
  * @param importFromId The id of the existing ShareRecipient that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/share_recipient#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShareRecipient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_share_recipient", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/share_recipient cloudflare_share_recipient} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShareRecipientConfig
  */
  public constructor(scope: Construct, id: string, config: ShareRecipientConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_share_recipient',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
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
    this._organizationId = config.organizationId;
    this._recipientAccountId = config.recipientAccountId;
    this._shareId = config.shareId;
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

  // association_status - computed: true, optional: false, required: false
  public get associationStatus() {
    return this.getStringAttribute('association_status');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // recipient_account_id - computed: false, optional: true, required: false
  private _recipientAccountId?: string; 
  public get recipientAccountId() {
    return this.getStringAttribute('recipient_account_id');
  }
  public set recipientAccountId(value: string) {
    this._recipientAccountId = value;
  }
  public resetRecipientAccountId() {
    this._recipientAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientAccountIdInput() {
    return this._recipientAccountId;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new ShareRecipientResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // share_id - computed: false, optional: false, required: true
  private _shareId?: string; 
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      recipient_account_id: cdktf.stringToTerraform(this._recipientAccountId),
      share_id: cdktf.stringToTerraform(this._shareId),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipient_account_id: {
        value: cdktf.stringToHclTerraform(this._recipientAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_id: {
        value: cdktf.stringToHclTerraform(this._shareId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
