// https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretSqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration of the dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#configuration DynamicSecretSqlDatabase#configuration}
  */
  readonly configuration: DynamicSecretSqlDatabaseConfiguration;
  /**
  * The default TTL that will be applied for all the leases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#default_ttl DynamicSecretSqlDatabase#default_ttl}
  */
  readonly defaultTtl: string;
  /**
  * The slug of the environment to create the dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#environment_slug DynamicSecretSqlDatabase#environment_slug}
  */
  readonly environmentSlug: string;
  /**
  * The maximum limit a TTL can be leased or renewed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#max_ttl DynamicSecretSqlDatabase#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * The metadata associated with this dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#metadata DynamicSecretSqlDatabase#metadata}
  */
  readonly metadata?: DynamicSecretSqlDatabaseMetadata[] | cdktf.IResolvable;
  /**
  * The name of the dynamic secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#name DynamicSecretSqlDatabase#name}
  */
  readonly name: string;
  /**
  * The path to create the dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#path DynamicSecretSqlDatabase#path}
  */
  readonly path: string;
  /**
  * The slug of the project to create dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#project_slug DynamicSecretSqlDatabase#project_slug}
  */
  readonly projectSlug: string;
  /**
  * The username template of the dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#username_template DynamicSecretSqlDatabase#username_template}
  */
  readonly usernameTemplate?: string;
}
export interface DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired {
  /**
  * The number of digits required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#digits DynamicSecretSqlDatabase#digits}
  */
  readonly digits: number;
  /**
  * The number of lowercase characters required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#lowercase DynamicSecretSqlDatabase#lowercase}
  */
  readonly lowercase: number;
  /**
  * The number of symbols required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#symbols DynamicSecretSqlDatabase#symbols}
  */
  readonly symbols: number;
  /**
  * The number of uppercase characters required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#uppercase DynamicSecretSqlDatabase#uppercase}
  */
  readonly uppercase: number;
}

export function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToTerraform(struct?: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.numberToTerraform(struct!.digits),
    lowercase: cdktf.numberToTerraform(struct!.lowercase),
    symbols: cdktf.numberToTerraform(struct!.symbols),
    uppercase: cdktf.numberToTerraform(struct!.uppercase),
  }
}


export function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform(struct?: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.numberToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lowercase: {
      value: cdktf.numberToHclTerraform(struct!.lowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    symbols: {
      value: cdktf.numberToHclTerraform(struct!.symbols),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uppercase: {
      value: cdktf.numberToHclTerraform(struct!.uppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._lowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowercase = this._lowercase;
    }
    if (this._symbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbols = this._symbols;
    }
    if (this._uppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.uppercase = this._uppercase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digits = undefined;
      this._lowercase = undefined;
      this._symbols = undefined;
      this._uppercase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digits = value.digits;
      this._lowercase = value.lowercase;
      this._symbols = value.symbols;
      this._uppercase = value.uppercase;
    }
  }

  // digits - computed: false, optional: false, required: true
  private _digits?: number; 
  public get digits() {
    return this.getNumberAttribute('digits');
  }
  public set digits(value: number) {
    this._digits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // lowercase - computed: false, optional: false, required: true
  private _lowercase?: number; 
  public get lowercase() {
    return this.getNumberAttribute('lowercase');
  }
  public set lowercase(value: number) {
    this._lowercase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowercaseInput() {
    return this._lowercase;
  }

  // symbols - computed: false, optional: false, required: true
  private _symbols?: number; 
  public get symbols() {
    return this.getNumberAttribute('symbols');
  }
  public set symbols(value: number) {
    this._symbols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolsInput() {
    return this._symbols;
  }

  // uppercase - computed: false, optional: false, required: true
  private _uppercase?: number; 
  public get uppercase() {
    return this.getNumberAttribute('uppercase');
  }
  public set uppercase(value: number) {
    this._uppercase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uppercaseInput() {
    return this._uppercase;
  }
}
export interface DynamicSecretSqlDatabaseConfigurationPasswordRequirements {
  /**
  * The symbols allowed in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#allowed_symbols DynamicSecretSqlDatabase#allowed_symbols}
  */
  readonly allowedSymbols?: string;
  /**
  * The length of the password to use to create the dynamic secret lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#length DynamicSecretSqlDatabase#length}
  */
  readonly length: number;
  /**
  * The required characters to use to create the dynamic secret lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#required DynamicSecretSqlDatabase#required}
  */
  readonly required: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired;
}

export function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToTerraform(struct?: DynamicSecretSqlDatabaseConfigurationPasswordRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_symbols: cdktf.stringToTerraform(struct!.allowedSymbols),
    length: cdktf.numberToTerraform(struct!.length),
    required: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToTerraform(struct!.required),
  }
}


export function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToHclTerraform(struct?: DynamicSecretSqlDatabaseConfigurationPasswordRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_symbols: {
      value: cdktf.stringToHclTerraform(struct!.allowedSymbols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required: {
      value: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform(struct!.required),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretSqlDatabaseConfigurationPasswordRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSymbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSymbols = this._allowedSymbols;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._required?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretSqlDatabaseConfigurationPasswordRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedSymbols = undefined;
      this._length = undefined;
      this._required.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedSymbols = value.allowedSymbols;
      this._length = value.length;
      this._required.internalValue = value.required;
    }
  }

  // allowed_symbols - computed: false, optional: true, required: false
  private _allowedSymbols?: string; 
  public get allowedSymbols() {
    return this.getStringAttribute('allowed_symbols');
  }
  public set allowedSymbols(value: string) {
    this._allowedSymbols = value;
  }
  public resetAllowedSymbols() {
    this._allowedSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSymbolsInput() {
    return this._allowedSymbols;
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // required - computed: false, optional: false, required: true
  private _required = new DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
  public putRequired(value: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired) {
    this._required.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required.internalValue;
  }
}
export interface DynamicSecretSqlDatabaseConfiguration {
  /**
  * The CA certificate to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#ca DynamicSecretSqlDatabase#ca}
  */
  readonly ca?: string;
  /**
  * The database client to use. Currently supported values are postgres, mysql2, oracledb, mssql, sap-ase, and vertica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#client DynamicSecretSqlDatabase#client}
  */
  readonly client: string;
  /**
  * The creation statement to use to create the dynamic secret lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#creation_statement DynamicSecretSqlDatabase#creation_statement}
  */
  readonly creationStatement: string;
  /**
  * The name of the database to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#database DynamicSecretSqlDatabase#database}
  */
  readonly database: string;
  /**
  * The Gateway ID to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#gateway_id DynamicSecretSqlDatabase#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * The host of the database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#host DynamicSecretSqlDatabase#host}
  */
  readonly host: string;
  /**
  * The password to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#password DynamicSecretSqlDatabase#password}
  */
  readonly password: string;
  /**
  * The password requirements to use to create the dynamic secret lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#password_requirements DynamicSecretSqlDatabase#password_requirements}
  */
  readonly passwordRequirements?: DynamicSecretSqlDatabaseConfigurationPasswordRequirements;
  /**
  * The port of the database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#port DynamicSecretSqlDatabase#port}
  */
  readonly port: number;
  /**
  * The renew statement to use to renew the dynamic secret lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#renew_statement DynamicSecretSqlDatabase#renew_statement}
  */
  readonly renewStatement?: string;
  /**
  * The revocation statement to use to revoke the dynamic secret lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#revocation_statement DynamicSecretSqlDatabase#revocation_statement}
  */
  readonly revocationStatement: string;
  /**
  * The username to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#username DynamicSecretSqlDatabase#username}
  */
  readonly username: string;
}

export function dynamicSecretSqlDatabaseConfigurationToTerraform(struct?: DynamicSecretSqlDatabaseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    client: cdktf.stringToTerraform(struct!.client),
    creation_statement: cdktf.stringToTerraform(struct!.creationStatement),
    database: cdktf.stringToTerraform(struct!.database),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    password_requirements: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToTerraform(struct!.passwordRequirements),
    port: cdktf.numberToTerraform(struct!.port),
    renew_statement: cdktf.stringToTerraform(struct!.renewStatement),
    revocation_statement: cdktf.stringToTerraform(struct!.revocationStatement),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dynamicSecretSqlDatabaseConfigurationToHclTerraform(struct?: DynamicSecretSqlDatabaseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation_statement: {
      value: cdktf.stringToHclTerraform(struct!.creationStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_requirements: {
      value: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToHclTerraform(struct!.passwordRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicSecretSqlDatabaseConfigurationPasswordRequirements",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renew_statement: {
      value: cdktf.stringToHclTerraform(struct!.renewStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_statement: {
      value: cdktf.stringToHclTerraform(struct!.revocationStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretSqlDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretSqlDatabaseConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._creationStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationStatement = this._creationStatement;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._gatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayId = this._gatewayId;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRequirements = this._passwordRequirements?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._renewStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewStatement = this._renewStatement;
    }
    if (this._revocationStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationStatement = this._revocationStatement;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretSqlDatabaseConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._client = undefined;
      this._creationStatement = undefined;
      this._database = undefined;
      this._gatewayId = undefined;
      this._host = undefined;
      this._password = undefined;
      this._passwordRequirements.internalValue = undefined;
      this._port = undefined;
      this._renewStatement = undefined;
      this._revocationStatement = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._client = value.client;
      this._creationStatement = value.creationStatement;
      this._database = value.database;
      this._gatewayId = value.gatewayId;
      this._host = value.host;
      this._password = value.password;
      this._passwordRequirements.internalValue = value.passwordRequirements;
      this._port = value.port;
      this._renewStatement = value.renewStatement;
      this._revocationStatement = value.revocationStatement;
      this._username = value.username;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // client - computed: false, optional: false, required: true
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // creation_statement - computed: false, optional: false, required: true
  private _creationStatement?: string; 
  public get creationStatement() {
    return this.getStringAttribute('creation_statement');
  }
  public set creationStatement(value: string) {
    this._creationStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationStatementInput() {
    return this._creationStatement;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_requirements - computed: false, optional: true, required: false
  private _passwordRequirements = new DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference(this, "password_requirements");
  public get passwordRequirements() {
    return this._passwordRequirements;
  }
  public putPasswordRequirements(value: DynamicSecretSqlDatabaseConfigurationPasswordRequirements) {
    this._passwordRequirements.internalValue = value;
  }
  public resetPasswordRequirements() {
    this._passwordRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequirementsInput() {
    return this._passwordRequirements.internalValue;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // renew_statement - computed: false, optional: true, required: false
  private _renewStatement?: string; 
  public get renewStatement() {
    return this.getStringAttribute('renew_statement');
  }
  public set renewStatement(value: string) {
    this._renewStatement = value;
  }
  public resetRenewStatement() {
    this._renewStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewStatementInput() {
    return this._renewStatement;
  }

  // revocation_statement - computed: false, optional: false, required: true
  private _revocationStatement?: string; 
  public get revocationStatement() {
    return this.getStringAttribute('revocation_statement');
  }
  public set revocationStatement(value: string) {
    this._revocationStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationStatementInput() {
    return this._revocationStatement;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DynamicSecretSqlDatabaseMetadata {
  /**
  * The key of the metadata object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#key DynamicSecretSqlDatabase#key}
  */
  readonly key: string;
  /**
  * The value of the metadata object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#value DynamicSecretSqlDatabase#value}
  */
  readonly value: string;
}

export function dynamicSecretSqlDatabaseMetadataToTerraform(struct?: DynamicSecretSqlDatabaseMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dynamicSecretSqlDatabaseMetadataToHclTerraform(struct?: DynamicSecretSqlDatabaseMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretSqlDatabaseMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamicSecretSqlDatabaseMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretSqlDatabaseMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DynamicSecretSqlDatabaseMetadataList extends cdktf.ComplexList {
  public internalValue? : DynamicSecretSqlDatabaseMetadata[] | cdktf.IResolvable

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
  public get(index: number): DynamicSecretSqlDatabaseMetadataOutputReference {
    return new DynamicSecretSqlDatabaseMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database infisical_dynamic_secret_sql_database}
*/
export class DynamicSecretSqlDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_dynamic_secret_sql_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretSqlDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretSqlDatabase to import
  * @param importFromId The id of the existing DynamicSecretSqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretSqlDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_sql_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/dynamic_secret_sql_database infisical_dynamic_secret_sql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretSqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretSqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_dynamic_secret_sql_database',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._defaultTtl = config.defaultTtl;
    this._environmentSlug = config.environmentSlug;
    this._maxTtl = config.maxTtl;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._path = config.path;
    this._projectSlug = config.projectSlug;
    this._usernameTemplate = config.usernameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DynamicSecretSqlDatabaseConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DynamicSecretSqlDatabaseConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // default_ttl - computed: false, optional: false, required: true
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // environment_slug - computed: false, optional: false, required: true
  private _environmentSlug?: string; 
  public get environmentSlug() {
    return this.getStringAttribute('environment_slug');
  }
  public set environmentSlug(value: string) {
    this._environmentSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentSlugInput() {
    return this._environmentSlug;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DynamicSecretSqlDatabaseMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DynamicSecretSqlDatabaseMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // project_slug - computed: false, optional: false, required: true
  private _projectSlug?: string; 
  public get projectSlug() {
    return this.getStringAttribute('project_slug');
  }
  public set projectSlug(value: string) {
    this._projectSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSlugInput() {
    return this._projectSlug;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: dynamicSecretSqlDatabaseConfigurationToTerraform(this._configuration.internalValue),
      default_ttl: cdktf.stringToTerraform(this._defaultTtl),
      environment_slug: cdktf.stringToTerraform(this._environmentSlug),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
      metadata: cdktf.listMapper(dynamicSecretSqlDatabaseMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      project_slug: cdktf.stringToTerraform(this._projectSlug),
      username_template: cdktf.stringToTerraform(this._usernameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: dynamicSecretSqlDatabaseConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamicSecretSqlDatabaseConfiguration",
      },
      default_ttl: {
        value: cdktf.stringToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_slug: {
        value: cdktf.stringToHclTerraform(this._environmentSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ttl: {
        value: cdktf.stringToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(dynamicSecretSqlDatabaseMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamicSecretSqlDatabaseMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_slug: {
        value: cdktf.stringToHclTerraform(this._projectSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_template: {
        value: cdktf.stringToHclTerraform(this._usernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
