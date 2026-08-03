// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_device_ip_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustDeviceIpProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_device_ip_profile#account_id DataCloudflareZeroTrustDeviceIpProfile#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_device_ip_profile#filter DataCloudflareZeroTrustDeviceIpProfile#filter}
  */
  readonly filter?: DataCloudflareZeroTrustDeviceIpProfileFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_device_ip_profile#profile_id DataCloudflareZeroTrustDeviceIpProfile#profile_id}
  */
  readonly profileId?: string;
}
export interface DataCloudflareZeroTrustDeviceIpProfileFilter {
  /**
  * The number of IP profiles to return per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_device_ip_profile#per_page DataCloudflareZeroTrustDeviceIpProfile#per_page}
  */
  readonly perPage?: number;
}

export function dataCloudflareZeroTrustDeviceIpProfileFilterToTerraform(struct?: DataCloudflareZeroTrustDeviceIpProfileFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_page: cdktf.numberToTerraform(struct!.perPage),
  }
}


export function dataCloudflareZeroTrustDeviceIpProfileFilterToHclTerraform(struct?: DataCloudflareZeroTrustDeviceIpProfileFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_page: {
      value: cdktf.numberToHclTerraform(struct!.perPage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustDeviceIpProfileFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPage = this._perPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustDeviceIpProfileFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._perPage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._perPage = value.perPage;
    }
  }

  // per_page - computed: true, optional: true, required: false
  private _perPage?: number; 
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }
  public set perPage(value: number) {
    this._perPage = value;
  }
  public resetPerPage() {
    this._perPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPageInput() {
    return this._perPage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile}
*/
export class DataCloudflareZeroTrustDeviceIpProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_device_ip_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceIpProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceIpProfile to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceIpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_device_ip_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceIpProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_ip_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustDeviceIpProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceIpProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_device_ip_profile',
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
    this._filter.internalValue = config.filter;
    this._profileId = config.profileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustDeviceIpProfileFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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
      filter: dataCloudflareZeroTrustDeviceIpProfileFilterToTerraform(this._filter.internalValue),
      profile_id: cdktf.stringToTerraform(this._profileId),
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
      filter: {
        value: dataCloudflareZeroTrustDeviceIpProfileFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustDeviceIpProfileFilter",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
