// https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareEmailSecurityDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#account_id DataCloudflareEmailSecurityDomains#account_id}
  */
  readonly accountId: string;
  /**
  * Currently active delivery mode to filter by.
  * Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#active_delivery_mode DataCloudflareEmailSecurityDomains#active_delivery_mode}
  */
  readonly activeDeliveryMode?: string;
  /**
  * Delivery mode to filter by.
  * Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#allowed_delivery_mode DataCloudflareEmailSecurityDomains#allowed_delivery_mode}
  */
  readonly allowedDeliveryMode?: string;
  /**
  * The sorting direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#direction DataCloudflareEmailSecurityDomains#direction}
  */
  readonly direction?: string;
  /**
  * Domain names to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#domain DataCloudflareEmailSecurityDomains#domain}
  */
  readonly domain?: string[];
  /**
  * Integration ID to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#integration_id DataCloudflareEmailSecurityDomains#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#max_items DataCloudflareEmailSecurityDomains#max_items}
  */
  readonly maxItems?: number;
  /**
  * Field to sort by.
  * Available values: "domain", "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#order DataCloudflareEmailSecurityDomains#order}
  */
  readonly order?: string;
  /**
  * Search term for filtering records. Behavior may change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#search DataCloudflareEmailSecurityDomains#search}
  */
  readonly search?: string;
  /**
  * Filters response to domains with the provided status.
  * Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#status DataCloudflareEmailSecurityDomains#status}
  */
  readonly status?: string;
}
export interface DataCloudflareEmailSecurityDomainsResultAuthorization {
}

export function dataCloudflareEmailSecurityDomainsResultAuthorizationToTerraform(struct?: DataCloudflareEmailSecurityDomainsResultAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareEmailSecurityDomainsResultAuthorizationToHclTerraform(struct?: DataCloudflareEmailSecurityDomainsResultAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareEmailSecurityDomainsResultAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityDomainsResultAuthorization | undefined) {
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
export interface DataCloudflareEmailSecurityDomainsResultEmailsProcessed {
}

export function dataCloudflareEmailSecurityDomainsResultEmailsProcessedToTerraform(struct?: DataCloudflareEmailSecurityDomainsResultEmailsProcessed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareEmailSecurityDomainsResultEmailsProcessedToHclTerraform(struct?: DataCloudflareEmailSecurityDomainsResultEmailsProcessed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareEmailSecurityDomainsResultEmailsProcessed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityDomainsResultEmailsProcessed | undefined) {
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
export interface DataCloudflareEmailSecurityDomainsResult {
}

export function dataCloudflareEmailSecurityDomainsResultToTerraform(struct?: DataCloudflareEmailSecurityDomainsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareEmailSecurityDomainsResultToHclTerraform(struct?: DataCloudflareEmailSecurityDomainsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareEmailSecurityDomainsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareEmailSecurityDomainsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareEmailSecurityDomainsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_delivery_modes - computed: true, optional: false, required: false
  public get allowedDeliveryModes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_delivery_modes'));
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference(this, "authorization");
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

  // drop_dispositions - computed: true, optional: false, required: false
  public get dropDispositions() {
    return cdktf.Fn.tolist(this.getListAttribute('drop_dispositions'));
  }

  // emails_processed - computed: true, optional: false, required: false
  private _emailsProcessed = new DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference(this, "emails_processed");
  public get emailsProcessed() {
    return this._emailsProcessed;
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
}

export class DataCloudflareEmailSecurityDomainsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareEmailSecurityDomainsResultOutputReference {
    return new DataCloudflareEmailSecurityDomainsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains cloudflare_email_security_domains}
*/
export class DataCloudflareEmailSecurityDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityDomains to import
  * @param importFromId The id of the existing DataCloudflareEmailSecurityDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains cloudflare_email_security_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareEmailSecurityDomainsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareEmailSecurityDomainsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_domains',
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
    this._activeDeliveryMode = config.activeDeliveryMode;
    this._allowedDeliveryMode = config.allowedDeliveryMode;
    this._direction = config.direction;
    this._domain = config.domain;
    this._integrationId = config.integrationId;
    this._maxItems = config.maxItems;
    this._order = config.order;
    this._search = config.search;
    this._status = config.status;
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

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareEmailSecurityDomainsResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      active_delivery_mode: cdktf.stringToTerraform(this._activeDeliveryMode),
      allowed_delivery_mode: cdktf.stringToTerraform(this._allowedDeliveryMode),
      direction: cdktf.stringToTerraform(this._direction),
      domain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domain),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      max_items: cdktf.numberToTerraform(this._maxItems),
      order: cdktf.stringToTerraform(this._order),
      search: cdktf.stringToTerraform(this._search),
      status: cdktf.stringToTerraform(this._status),
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
      active_delivery_mode: {
        value: cdktf.stringToHclTerraform(this._activeDeliveryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_delivery_mode: {
        value: cdktf.stringToHclTerraform(this._allowedDeliveryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domain),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
