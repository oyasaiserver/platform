import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareD1DatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database#account_id DataCloudflareD1Database#account_id}
    */
    readonly accountId?: string;
    /**
    * D1 database identifier (UUID).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database#database_id DataCloudflareD1Database#database_id}
    */
    readonly databaseId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database#filter DataCloudflareD1Database#filter}
    */
    readonly filter?: DataCloudflareD1DatabaseFilter;
}
export interface DataCloudflareD1DatabaseFilter {
    /**
    * a database name to search for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database#name DataCloudflareD1Database#name}
    */
    readonly name?: string;
}
export declare function dataCloudflareD1DatabaseFilterToTerraform(struct?: DataCloudflareD1DatabaseFilter | cdktf.IResolvable): any;
export declare function dataCloudflareD1DatabaseFilterToHclTerraform(struct?: DataCloudflareD1DatabaseFilter | cdktf.IResolvable): any;
export declare class DataCloudflareD1DatabaseFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareD1DatabaseFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareD1DatabaseFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
}
export interface DataCloudflareD1DatabaseReadReplication {
}
export declare function dataCloudflareD1DatabaseReadReplicationToTerraform(struct?: DataCloudflareD1DatabaseReadReplication): any;
export declare function dataCloudflareD1DatabaseReadReplicationToHclTerraform(struct?: DataCloudflareD1DatabaseReadReplication): any;
export declare class DataCloudflareD1DatabaseReadReplicationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareD1DatabaseReadReplication | undefined;
    set internalValue(value: DataCloudflareD1DatabaseReadReplication | undefined);
    get mode(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database cloudflare_d1_database}
*/
export declare class DataCloudflareD1Database extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_d1_database";
    /**
    * Generates CDKTF code for importing a DataCloudflareD1Database resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareD1Database to import
    * @param importFromId The id of the existing DataCloudflareD1Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareD1Database to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database cloudflare_d1_database} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareD1DatabaseConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareD1DatabaseConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    private _databaseId?;
    get databaseId(): string;
    set databaseId(value: string);
    resetDatabaseId(): void;
    get databaseIdInput(): string;
    get fileSize(): any;
    private _filter;
    get filter(): DataCloudflareD1DatabaseFilterOutputReference;
    putFilter(value: DataCloudflareD1DatabaseFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get jurisdiction(): any;
    get name(): any;
    get numTables(): any;
    private _readReplication;
    get readReplication(): DataCloudflareD1DatabaseReadReplicationOutputReference;
    get uuid(): any;
    get version(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
