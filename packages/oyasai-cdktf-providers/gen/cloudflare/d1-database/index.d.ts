import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface D1DatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#account_id D1Database#account_id}
    */
    readonly accountId?: string;
    /**
    * Specify the location to restrict the D1 database to run and store data. If this option is present, the location hint is ignored.
    * Available values: "eu", "fedramp".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#jurisdiction D1Database#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * D1 database name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#name D1Database#name}
    */
    readonly name: string;
    /**
    * Specify the region to create the D1 primary, if available. If this option is omitted, the D1 will be created as close as possible to the current user.
    * Available values: "wnam", "enam", "weur", "eeur", "apac", "oc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#primary_location_hint D1Database#primary_location_hint}
    */
    readonly primaryLocationHint?: string;
    /**
    * Configuration for D1 read replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#read_replication D1Database#read_replication}
    */
    readonly readReplication?: D1DatabaseReadReplication;
}
export interface D1DatabaseReadReplication {
    /**
    * The read replication mode for the database. Use 'auto' to create replicas and allow D1 automatically place them around the world, or 'disabled' to not use any database replicas (it can take a few hours for all replicas to be deleted).
    * Available values: "auto", "disabled".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#mode D1Database#mode}
    */
    readonly mode: string;
}
export declare function d1DatabaseReadReplicationToTerraform(struct?: D1DatabaseReadReplication | cdktf.IResolvable): any;
export declare function d1DatabaseReadReplicationToHclTerraform(struct?: D1DatabaseReadReplication | cdktf.IResolvable): any;
export declare class D1DatabaseReadReplicationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): D1DatabaseReadReplication | cdktf.IResolvable | undefined;
    set internalValue(value: D1DatabaseReadReplication | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database cloudflare_d1_database}
*/
export declare class D1Database extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_d1_database";
    /**
    * Generates CDKTF code for importing a D1Database resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the D1Database to import
    * @param importFromId The id of the existing D1Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the D1Database to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database cloudflare_d1_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options D1DatabaseConfig
    */
    constructor(scope: Construct, id: string, config: D1DatabaseConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get fileSize(): any;
    get id(): any;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get numTables(): any;
    private _primaryLocationHint?;
    get primaryLocationHint(): string;
    set primaryLocationHint(value: string);
    resetPrimaryLocationHint(): void;
    get primaryLocationHintInput(): string;
    private _readReplication;
    get readReplication(): D1DatabaseReadReplicationOutputReference;
    putReadReplication(value: D1DatabaseReadReplication): void;
    resetReadReplication(): void;
    get readReplicationInput(): any;
    get uuid(): any;
    get version(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
