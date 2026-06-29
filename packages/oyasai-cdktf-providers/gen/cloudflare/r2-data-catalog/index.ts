// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/r2_data_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface R2DataCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use this to identify the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/r2_data_catalog#account_id R2DataCatalog#account_id}
  */
  readonly accountId: string;
  /**
  * Specifies the R2 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/r2_data_catalog#bucket_name R2DataCatalog#bucket_name}
  */
  readonly bucketName: string;
}
export interface R2DataCatalogMaintenanceConfigCompaction {
}

export function r2DataCatalogMaintenanceConfigCompactionToTerraform(struct?: R2DataCatalogMaintenanceConfigCompaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function r2DataCatalogMaintenanceConfigCompactionToHclTerraform(struct?: R2DataCatalogMaintenanceConfigCompaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class R2DataCatalogMaintenanceConfigCompactionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2DataCatalogMaintenanceConfigCompaction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2DataCatalogMaintenanceConfigCompaction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_size_mb - computed: true, optional: false, required: false
  public get targetSizeMb() {
    return this.getStringAttribute('target_size_mb');
  }
}
export interface R2DataCatalogMaintenanceConfigSnapshotExpiration {
}

export function r2DataCatalogMaintenanceConfigSnapshotExpirationToTerraform(struct?: R2DataCatalogMaintenanceConfigSnapshotExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function r2DataCatalogMaintenanceConfigSnapshotExpirationToHclTerraform(struct?: R2DataCatalogMaintenanceConfigSnapshotExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2DataCatalogMaintenanceConfigSnapshotExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2DataCatalogMaintenanceConfigSnapshotExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_snapshot_age - computed: true, optional: false, required: false
  public get maxSnapshotAge() {
    return this.getStringAttribute('max_snapshot_age');
  }

  // min_snapshots_to_keep - computed: true, optional: false, required: false
  public get minSnapshotsToKeep() {
    return this.getNumberAttribute('min_snapshots_to_keep');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface R2DataCatalogMaintenanceConfig {
}

export function r2DataCatalogMaintenanceConfigToTerraform(struct?: R2DataCatalogMaintenanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function r2DataCatalogMaintenanceConfigToHclTerraform(struct?: R2DataCatalogMaintenanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class R2DataCatalogMaintenanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): R2DataCatalogMaintenanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2DataCatalogMaintenanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compaction - computed: true, optional: false, required: false
  private _compaction = new R2DataCatalogMaintenanceConfigCompactionOutputReference(this, "compaction");
  public get compaction() {
    return this._compaction;
  }

  // snapshot_expiration - computed: true, optional: false, required: false
  private _snapshotExpiration = new R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference(this, "snapshot_expiration");
  public get snapshotExpiration() {
    return this._snapshotExpiration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/r2_data_catalog cloudflare_r2_data_catalog}
*/
export class R2DataCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_r2_data_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a R2DataCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the R2DataCatalog to import
  * @param importFromId The id of the existing R2DataCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/r2_data_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the R2DataCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_data_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/r2_data_catalog cloudflare_r2_data_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options R2DataCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: R2DataCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_r2_data_catalog',
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
    this._bucketName = config.bucketName;
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

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // credential_status - computed: true, optional: false, required: false
  public get credentialStatus() {
    return this.getStringAttribute('credential_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance_config - computed: true, optional: false, required: false
  private _maintenanceConfig = new R2DataCatalogMaintenanceConfigOutputReference(this, "maintenance_config");
  public get maintenanceConfig() {
    return this._maintenanceConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
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
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
