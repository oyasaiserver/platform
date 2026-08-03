// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#account_id Share#account_id}
  */
  readonly accountId: string;
  /**
  * The name of the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#name Share#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#recipients Share#recipients}
  */
  readonly recipients: ShareRecipients[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#resources Share#resources}
  */
  readonly resources: ShareResources[] | cdktf.IResolvable;
}
export interface ShareRecipients {
  /**
  * Organization identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#organization_id Share#organization_id}
  */
  readonly organizationId?: string;
  /**
  * The account that will receive the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#recipient_account_id Share#recipient_account_id}
  */
  readonly recipientAccountId?: string;
}

export function shareRecipientsToTerraform(struct?: ShareRecipients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    recipient_account_id: cdktf.stringToTerraform(struct!.recipientAccountId),
  }
}


export function shareRecipientsToHclTerraform(struct?: ShareRecipients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipient_account_id: {
      value: cdktf.stringToHclTerraform(struct!.recipientAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShareRecipientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ShareRecipients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._recipientAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientAccountId = this._recipientAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShareRecipients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationId = undefined;
      this._recipientAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationId = value.organizationId;
      this._recipientAccountId = value.recipientAccountId;
    }
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
}

export class ShareRecipientsList extends cdktf.ComplexList {
  public internalValue? : ShareRecipients[] | cdktf.IResolvable

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
  public get(index: number): ShareRecipientsOutputReference {
    return new ShareRecipientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ShareResources {
  /**
  * Resource Metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#meta Share#meta}
  */
  readonly meta: string;
  /**
  * Account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#resource_account_id Share#resource_account_id}
  */
  readonly resourceAccountId: string;
  /**
  * Share Resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#resource_id Share#resource_id}
  */
  readonly resourceId: string;
  /**
  * Resource Type.
  * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#resource_type Share#resource_type}
  */
  readonly resourceType: string;
}

export function shareResourcesToTerraform(struct?: ShareResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    meta: cdktf.stringToTerraform(struct!.meta),
    resource_account_id: cdktf.stringToTerraform(struct!.resourceAccountId),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function shareResourcesToHclTerraform(struct?: ShareResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    meta: {
      value: cdktf.stringToHclTerraform(struct!.meta),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_account_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShareResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ShareResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._meta !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta;
    }
    if (this._resourceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAccountId = this._resourceAccountId;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShareResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._meta = undefined;
      this._resourceAccountId = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._meta = value.meta;
      this._resourceAccountId = value.resourceAccountId;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // meta - computed: false, optional: false, required: true
  private _meta?: string; 
  public get meta() {
    return this.getStringAttribute('meta');
  }
  public set meta(value: string) {
    this._meta = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // resource_account_id - computed: false, optional: false, required: true
  private _resourceAccountId?: string; 
  public get resourceAccountId() {
    return this.getStringAttribute('resource_account_id');
  }
  public set resourceAccountId(value: string) {
    this._resourceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccountIdInput() {
    return this._resourceAccountId;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class ShareResourcesList extends cdktf.ComplexList {
  public internalValue? : ShareResources[] | cdktf.IResolvable

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
  public get(index: number): ShareResourcesOutputReference {
    return new ShareResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share cloudflare_share}
*/
export class Share extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Share resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Share to import
  * @param importFromId The id of the existing Share that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Share to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share cloudflare_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShareConfig
  */
  public constructor(scope: Construct, id: string, config: ShareConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_share',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.22.0'
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
    this._recipients.internalValue = config.recipients;
    this._resources.internalValue = config.resources;
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

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // associated_recipient_count - computed: true, optional: false, required: false
  public get associatedRecipientCount() {
    return this.getNumberAttribute('associated_recipient_count');
  }

  // associating_recipient_count - computed: true, optional: false, required: false
  public get associatingRecipientCount() {
    return this.getNumberAttribute('associating_recipient_count');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // disassociated_recipient_count - computed: true, optional: false, required: false
  public get disassociatedRecipientCount() {
    return this.getNumberAttribute('disassociated_recipient_count');
  }

  // disassociating_recipient_count - computed: true, optional: false, required: false
  public get disassociatingRecipientCount() {
    return this.getNumberAttribute('disassociating_recipient_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients = new ShareRecipientsList(this, "recipients", false);
  public get recipients() {
    return this._recipients;
  }
  public putRecipients(value: ShareRecipients[] | cdktf.IResolvable) {
    this._recipients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new ShareResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ShareResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      recipients: cdktf.listMapper(shareRecipientsToTerraform, false)(this._recipients.internalValue),
      resources: cdktf.listMapper(shareResourcesToTerraform, false)(this._resources.internalValue),
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
      recipients: {
        value: cdktf.listMapperHcl(shareRecipientsToHclTerraform, false)(this._recipients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShareRecipientsList",
      },
      resources: {
        value: cdktf.listMapperHcl(shareResourcesToHclTerraform, false)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShareResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
