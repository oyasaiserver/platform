// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicTransitCf1SiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#account_id MagicTransitCf1Site#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}
  */
  readonly body: MagicTransitCf1SiteBody[] | cdktf.IResolvable;
  /**
  * A human-provided description of the CF1 Site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}
  */
  readonly location?: MagicTransitCf1SiteLocation;
  /**
  * A human-provided name describing the CF1 Site that should be unique within the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}
  */
  readonly name?: string;
}
export interface MagicTransitCf1SiteBodyLocation {
  /**
  * Latitude of the CF1 Site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}
  */
  readonly lat?: number;
  /**
  * Longitude of the CF1 Site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}
  */
  readonly long?: number;
  /**
  * Name of nearest town, city, or village.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}
  */
  readonly name?: string;
}

export function magicTransitCf1SiteBodyLocationToTerraform(struct?: MagicTransitCf1SiteBodyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lat: cdktf.numberToTerraform(struct!.lat),
    long: cdktf.numberToTerraform(struct!.long),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function magicTransitCf1SiteBodyLocationToHclTerraform(struct?: MagicTransitCf1SiteBodyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lat: {
      value: cdktf.numberToHclTerraform(struct!.lat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    long: {
      value: cdktf.numberToHclTerraform(struct!.long),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitCf1SiteBodyLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitCf1SiteBodyLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lat = this._lat;
    }
    if (this._long !== undefined) {
      hasAnyValues = true;
      internalValueResult.long = this._long;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitCf1SiteBodyLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lat = undefined;
      this._long = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lat = value.lat;
      this._long = value.long;
      this._name = value.name;
    }
  }

  // lat - computed: false, optional: true, required: false
  private _lat?: number; 
  public get lat() {
    return this.getNumberAttribute('lat');
  }
  public set lat(value: number) {
    this._lat = value;
  }
  public resetLat() {
    this._lat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latInput() {
    return this._lat;
  }

  // long - computed: false, optional: true, required: false
  private _long?: number; 
  public get long() {
    return this.getNumberAttribute('long');
  }
  public set long(value: number) {
    this._long = value;
  }
  public resetLong() {
    this._long = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longInput() {
    return this._long;
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
}
export interface MagicTransitCf1SiteBody {
  /**
  * A human-provided description of the CF1 Site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}
  */
  readonly location?: MagicTransitCf1SiteBodyLocation;
  /**
  * A human-provided name describing the CF1 Site that should be unique within the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}
  */
  readonly name: string;
}

export function magicTransitCf1SiteBodyToTerraform(struct?: MagicTransitCf1SiteBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    location: magicTransitCf1SiteBodyLocationToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function magicTransitCf1SiteBodyToHclTerraform(struct?: MagicTransitCf1SiteBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: magicTransitCf1SiteBodyLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "MagicTransitCf1SiteBodyLocation",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitCf1SiteBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MagicTransitCf1SiteBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitCf1SiteBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._location.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._location.internalValue = value.location;
      this._name = value.name;
    }
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location = new MagicTransitCf1SiteBodyLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: MagicTransitCf1SiteBodyLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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
}

export class MagicTransitCf1SiteBodyList extends cdktf.ComplexList {
  public internalValue? : MagicTransitCf1SiteBody[] | cdktf.IResolvable

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
  public get(index: number): MagicTransitCf1SiteBodyOutputReference {
    return new MagicTransitCf1SiteBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MagicTransitCf1SiteLocation {
  /**
  * Latitude of the CF1 Site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}
  */
  readonly lat?: number;
  /**
  * Longitude of the CF1 Site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}
  */
  readonly long?: number;
  /**
  * Name of nearest town, city, or village.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}
  */
  readonly name?: string;
}

export function magicTransitCf1SiteLocationToTerraform(struct?: MagicTransitCf1SiteLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lat: cdktf.numberToTerraform(struct!.lat),
    long: cdktf.numberToTerraform(struct!.long),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function magicTransitCf1SiteLocationToHclTerraform(struct?: MagicTransitCf1SiteLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lat: {
      value: cdktf.numberToHclTerraform(struct!.lat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    long: {
      value: cdktf.numberToHclTerraform(struct!.long),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitCf1SiteLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitCf1SiteLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lat = this._lat;
    }
    if (this._long !== undefined) {
      hasAnyValues = true;
      internalValueResult.long = this._long;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitCf1SiteLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lat = undefined;
      this._long = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lat = value.lat;
      this._long = value.long;
      this._name = value.name;
    }
  }

  // lat - computed: false, optional: true, required: false
  private _lat?: number; 
  public get lat() {
    return this.getNumberAttribute('lat');
  }
  public set lat(value: number) {
    this._lat = value;
  }
  public resetLat() {
    this._lat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latInput() {
    return this._lat;
  }

  // long - computed: false, optional: true, required: false
  private _long?: number; 
  public get long() {
    return this.getNumberAttribute('long');
  }
  public set long(value: number) {
    this._long = value;
  }
  public resetLong() {
    this._long = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longInput() {
    return this._long;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}
*/
export class MagicTransitCf1Site extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_transit_cf1_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicTransitCf1Site resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicTransitCf1Site to import
  * @param importFromId The id of the existing MagicTransitCf1Site that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicTransitCf1Site to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_cf1_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicTransitCf1SiteConfig
  */
  public constructor(scope: Construct, id: string, config: MagicTransitCf1SiteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_transit_cf1_site',
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
    this._body.internalValue = config.body;
    this._description = config.description;
    this._location.internalValue = config.location;
    this._name = config.name;
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

  // body - computed: false, optional: false, required: true
  private _body = new MagicTransitCf1SiteBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: MagicTransitCf1SiteBody[] | cdktf.IResolvable) {
    this._body.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location = new MagicTransitCf1SiteLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: MagicTransitCf1SiteLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      body: cdktf.listMapper(magicTransitCf1SiteBodyToTerraform, false)(this._body.internalValue),
      description: cdktf.stringToTerraform(this._description),
      location: magicTransitCf1SiteLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      body: {
        value: cdktf.listMapperHcl(magicTransitCf1SiteBodyToHclTerraform, false)(this._body.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MagicTransitCf1SiteBodyList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: magicTransitCf1SiteLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicTransitCf1SiteLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
