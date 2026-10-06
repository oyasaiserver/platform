// https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareEmailSecurityDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#account_id DataCloudflareEmailSecurityDomain#account_id}
  */
  readonly accountId: string;
  /**
  * Domain identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain_id DataCloudflareEmailSecurityDomain#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}
  */
  readonly filter?: DataCloudflareEmailSecurityDomainFilter;
}
export interface DataCloudflareEmailSecurityDomainAuthorization {
}

export function dataCloudflareEmailSecurityDomainAuthorizationToTerraform(struct?: DataCloudflareEmailSecurityDomainAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareEmailSecurityDomainAuthorizationToHclTerraform(struct?: DataCloudflareEmailSecurityDomainAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareEmailSecurityDomainAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareEmailSecurityDomainAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityDomainAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorized - computed: true, optional: false, required: false
  public get authorized() {
    return this.getBooleanAttribute('authorized');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataCloudflareEmailSecurityDomainEmailsProcessed {
}

export function dataCloudflareEmailSecurityDomainEmailsProcessedToTerraform(struct?: DataCloudflareEmailSecurityDomainEmailsProcessed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareEmailSecurityDomainEmailsProcessedToHclTerraform(struct?: DataCloudflareEmailSecurityDomainEmailsProcessed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareEmailSecurityDomainEmailsProcessed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityDomainEmailsProcessed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // total_emails_processed - computed: true, optional: false, required: false
  public get totalEmailsProcessed() {
    return this.getNumberAttribute('total_emails_processed');
  }

  // total_emails_processed_previous - computed: true, optional: false, required: false
  public get totalEmailsProcessedPrevious() {
    return this.getNumberAttribute('total_emails_processed_previous');
  }
}
export interface DataCloudflareEmailSecurityDomainFilter {
  /**
  * Currently active delivery mode to filter by.
  * Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#active_delivery_mode DataCloudflareEmailSecurityDomain#active_delivery_mode}
  */
  readonly activeDeliveryMode?: string;
  /**
  * Delivery mode to filter by.
  * Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#allowed_delivery_mode DataCloudflareEmailSecurityDomain#allowed_delivery_mode}
  */
  readonly allowedDeliveryMode?: string;
  /**
  * The sorting direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#direction DataCloudflareEmailSecurityDomain#direction}
  */
  readonly direction?: string;
  /**
  * Domain names to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain DataCloudflareEmailSecurityDomain#domain}
  */
  readonly domain?: string[];
  /**
  * Integration ID to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#integration_id DataCloudflareEmailSecurityDomain#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Field to sort by.
  * Available values: "domain", "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#order DataCloudflareEmailSecurityDomain#order}
  */
  readonly order?: string;
  /**
  * Search term for filtering records. Behavior may change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#search DataCloudflareEmailSecurityDomain#search}
  */
  readonly search?: string;
  /**
  * Filters response to domains with the provided status.
  * Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#status DataCloudflareEmailSecurityDomain#status}
  */
  readonly status?: string;
}

export function dataCloudflareEmailSecurityDomainFilterToTerraform(struct?: DataCloudflareEmailSecurityDomainFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_delivery_mode: cdktf.stringToTerraform(struct!.activeDeliveryMode),
    allowed_delivery_mode: cdktf.stringToTerraform(struct!.allowedDeliveryMode),
    direction: cdktf.stringToTerraform(struct!.direction),
    domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domain),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    order: cdktf.stringToTerraform(struct!.order),
    search: cdktf.stringToTerraform(struct!.search),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataCloudflareEmailSecurityDomainFilterToHclTerraform(struct?: DataCloudflareEmailSecurityDomainFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_delivery_mode: {
      value: cdktf.stringToHclTerraform(struct!.activeDeliveryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_delivery_mode: {
      value: cdktf.stringToHclTerraform(struct!.allowedDeliveryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareEmailSecurityDomainFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareEmailSecurityDomainFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeliveryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeliveryMode = this._activeDeliveryMode;
    }
    if (this._allowedDeliveryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDeliveryMode = this._allowedDeliveryMode;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityDomainFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeliveryMode = undefined;
      this._allowedDeliveryMode = undefined;
      this._direction = undefined;
      this._domain = undefined;
      this._integrationId = undefined;
      this._order = undefined;
      this._search = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeliveryMode = value.activeDeliveryMode;
      this._allowedDeliveryMode = value.allowedDeliveryMode;
      this._direction = value.direction;
      this._domain = value.domain;
      this._integrationId = value.integrationId;
      this._order = value.order;
      this._search = value.search;
      this._status = value.status;
    }
  }

  // active_delivery_mode - computed: false, optional: true, required: false
  private _activeDeliveryMode?: string; 
  public get activeDeliveryMode() {
    return this.getStringAttribute('active_delivery_mode');
  }
  public set activeDeliveryMode(value: string) {
    this._activeDeliveryMode = value;
  }
  public resetActiveDeliveryMode() {
    this._activeDeliveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeliveryModeInput() {
    return this._activeDeliveryMode;
  }

  // allowed_delivery_mode - computed: false, optional: true, required: false
  private _allowedDeliveryMode?: string; 
  public get allowedDeliveryMode() {
    return this.getStringAttribute('allowed_delivery_mode');
  }
  public set allowedDeliveryMode(value: string) {
    this._allowedDeliveryMode = value;
  }
  public resetAllowedDeliveryMode() {
    this._allowedDeliveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDeliveryModeInput() {
    return this._allowedDeliveryMode;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string[]; 
  public get domain() {
    return this.getListAttribute('domain');
  }
  public set domain(value: string[]) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain cloudflare_email_security_domain}
*/
export class DataCloudflareEmailSecurityDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityDomain to import
  * @param importFromId The id of the existing DataCloudflareEmailSecurityDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain cloudflare_email_security_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareEmailSecurityDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareEmailSecurityDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_domain',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.25.0'
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
    this._domainId = config.domainId;
    this._filter.internalValue = config.filter;
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

  // allowed_delivery_modes - computed: true, optional: false, required: false
  public get allowedDeliveryModes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_delivery_modes'));
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataCloudflareEmailSecurityDomainAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dmarc_status - computed: true, optional: false, required: false
  public get dmarcStatus() {
    return this.getStringAttribute('dmarc_status');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // drop_dispositions - computed: true, optional: false, required: false
  public get dropDispositions() {
    return cdktf.Fn.tolist(this.getListAttribute('drop_dispositions'));
  }

  // emails_processed - computed: true, optional: false, required: false
  private _emailsProcessed = new DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference(this, "emails_processed");
  public get emailsProcessed() {
    return this._emailsProcessed;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareEmailSecurityDomainFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareEmailSecurityDomainFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbox_provider - computed: true, optional: false, required: false
  public get inboxProvider() {
    return this.getStringAttribute('inbox_provider');
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // ip_restrictions - computed: true, optional: false, required: false
  public get ipRestrictions() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_restrictions'));
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // lookback_hops - computed: true, optional: false, required: false
  public get lookbackHops() {
    return this.getNumberAttribute('lookback_hops');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // o365_tenant_id - computed: true, optional: false, required: false
  public get o365TenantId() {
    return this.getStringAttribute('o365_tenant_id');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // require_tls_inbound - computed: true, optional: false, required: false
  public get requireTlsInbound() {
    return this.getBooleanAttribute('require_tls_inbound');
  }

  // require_tls_outbound - computed: true, optional: false, required: false
  public get requireTlsOutbound() {
    return this.getBooleanAttribute('require_tls_outbound');
  }

  // spf_status - computed: true, optional: false, required: false
  public get spfStatus() {
    return this.getStringAttribute('spf_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transport - computed: true, optional: false, required: false
  public get transport() {
    return this.getStringAttribute('transport');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      domain_id: cdktf.stringToTerraform(this._domainId),
      filter: dataCloudflareEmailSecurityDomainFilterToTerraform(this._filter.internalValue),
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
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataCloudflareEmailSecurityDomainFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareEmailSecurityDomainFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
