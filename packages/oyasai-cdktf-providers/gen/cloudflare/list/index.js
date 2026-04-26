// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function listItemsHostnameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude_exact_hostname: cdktf.booleanToTerraform(struct.excludeExactHostname),
        url_hostname: cdktf.stringToTerraform(struct.urlHostname),
    };
}
export function listItemsHostnameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        exclude_exact_hostname: {
            value: cdktf.booleanToHclTerraform(struct.excludeExactHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        url_hostname: {
            value: cdktf.stringToHclTerraform(struct.urlHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ListItemsHostnameOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._excludeExactHostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeExactHostname = this._excludeExactHostname;
        }
        if (this._urlHostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlHostname = this._urlHostname;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludeExactHostname = undefined;
            this._urlHostname = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludeExactHostname = value.excludeExactHostname;
            this._urlHostname = value.urlHostname;
        }
    }
    // exclude_exact_hostname - computed: false, optional: true, required: false
    _excludeExactHostname;
    get excludeExactHostname() {
        return this.getBooleanAttribute('exclude_exact_hostname');
    }
    set excludeExactHostname(value) {
        this._excludeExactHostname = value;
    }
    resetExcludeExactHostname() {
        this._excludeExactHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeExactHostnameInput() {
        return this._excludeExactHostname;
    }
    // url_hostname - computed: false, optional: false, required: true
    _urlHostname;
    get urlHostname() {
        return this.getStringAttribute('url_hostname');
    }
    set urlHostname(value) {
        this._urlHostname = value;
    }
    // Temporarily expose input value. Use with caution.
    get urlHostnameInput() {
        return this._urlHostname;
    }
}
export function listItemsRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_subdomains: cdktf.booleanToTerraform(struct.includeSubdomains),
        preserve_path_suffix: cdktf.booleanToTerraform(struct.preservePathSuffix),
        preserve_query_string: cdktf.booleanToTerraform(struct.preserveQueryString),
        source_url: cdktf.stringToTerraform(struct.sourceUrl),
        status_code: cdktf.numberToTerraform(struct.statusCode),
        subpath_matching: cdktf.booleanToTerraform(struct.subpathMatching),
        target_url: cdktf.stringToTerraform(struct.targetUrl),
    };
}
export function listItemsRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        include_subdomains: {
            value: cdktf.booleanToHclTerraform(struct.includeSubdomains),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preserve_path_suffix: {
            value: cdktf.booleanToHclTerraform(struct.preservePathSuffix),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preserve_query_string: {
            value: cdktf.booleanToHclTerraform(struct.preserveQueryString),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source_url: {
            value: cdktf.stringToHclTerraform(struct.sourceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        subpath_matching: {
            value: cdktf.booleanToHclTerraform(struct.subpathMatching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        target_url: {
            value: cdktf.stringToHclTerraform(struct.targetUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ListItemsRedirectOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._includeSubdomains !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSubdomains = this._includeSubdomains;
        }
        if (this._preservePathSuffix !== undefined) {
            hasAnyValues = true;
            internalValueResult.preservePathSuffix = this._preservePathSuffix;
        }
        if (this._preserveQueryString !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveQueryString = this._preserveQueryString;
        }
        if (this._sourceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceUrl = this._sourceUrl;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        if (this._subpathMatching !== undefined) {
            hasAnyValues = true;
            internalValueResult.subpathMatching = this._subpathMatching;
        }
        if (this._targetUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetUrl = this._targetUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeSubdomains = undefined;
            this._preservePathSuffix = undefined;
            this._preserveQueryString = undefined;
            this._sourceUrl = undefined;
            this._statusCode = undefined;
            this._subpathMatching = undefined;
            this._targetUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeSubdomains = value.includeSubdomains;
            this._preservePathSuffix = value.preservePathSuffix;
            this._preserveQueryString = value.preserveQueryString;
            this._sourceUrl = value.sourceUrl;
            this._statusCode = value.statusCode;
            this._subpathMatching = value.subpathMatching;
            this._targetUrl = value.targetUrl;
        }
    }
    // include_subdomains - computed: false, optional: true, required: false
    _includeSubdomains;
    get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    set includeSubdomains(value) {
        this._includeSubdomains = value;
    }
    resetIncludeSubdomains() {
        this._includeSubdomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeSubdomainsInput() {
        return this._includeSubdomains;
    }
    // preserve_path_suffix - computed: false, optional: true, required: false
    _preservePathSuffix;
    get preservePathSuffix() {
        return this.getBooleanAttribute('preserve_path_suffix');
    }
    set preservePathSuffix(value) {
        this._preservePathSuffix = value;
    }
    resetPreservePathSuffix() {
        this._preservePathSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preservePathSuffixInput() {
        return this._preservePathSuffix;
    }
    // preserve_query_string - computed: false, optional: true, required: false
    _preserveQueryString;
    get preserveQueryString() {
        return this.getBooleanAttribute('preserve_query_string');
    }
    set preserveQueryString(value) {
        this._preserveQueryString = value;
    }
    resetPreserveQueryString() {
        this._preserveQueryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preserveQueryStringInput() {
        return this._preserveQueryString;
    }
    // source_url - computed: false, optional: false, required: true
    _sourceUrl;
    get sourceUrl() {
        return this.getStringAttribute('source_url');
    }
    set sourceUrl(value) {
        this._sourceUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceUrlInput() {
        return this._sourceUrl;
    }
    // status_code - computed: false, optional: true, required: false
    _statusCode;
    get statusCode() {
        return this.getNumberAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
    // subpath_matching - computed: false, optional: true, required: false
    _subpathMatching;
    get subpathMatching() {
        return this.getBooleanAttribute('subpath_matching');
    }
    set subpathMatching(value) {
        this._subpathMatching = value;
    }
    resetSubpathMatching() {
        this._subpathMatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subpathMatchingInput() {
        return this._subpathMatching;
    }
    // target_url - computed: false, optional: false, required: true
    _targetUrl;
    get targetUrl() {
        return this.getStringAttribute('target_url');
    }
    set targetUrl(value) {
        this._targetUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetUrlInput() {
        return this._targetUrl;
    }
}
export function listItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        asn: cdktf.numberToTerraform(struct.asn),
        comment: cdktf.stringToTerraform(struct.comment),
        hostname: listItemsHostnameToTerraform(struct.hostname),
        ip: cdktf.stringToTerraform(struct.ip),
        redirect: listItemsRedirectToTerraform(struct.redirect),
    };
}
export function listItemsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        asn: {
            value: cdktf.numberToHclTerraform(struct.asn),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        comment: {
            value: cdktf.stringToHclTerraform(struct.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: listItemsHostnameToHclTerraform(struct.hostname),
            isBlock: true,
            type: "struct",
            storageClassType: "ListItemsHostname",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect: {
            value: listItemsRedirectToHclTerraform(struct.redirect),
            isBlock: true,
            type: "struct",
            storageClassType: "ListItemsRedirect",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ListItemsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._asn !== undefined) {
            hasAnyValues = true;
            internalValueResult.asn = this._asn;
        }
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._hostname?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname?.internalValue;
        }
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._redirect?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirect = this._redirect?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._asn = undefined;
            this._comment = undefined;
            this._hostname.internalValue = undefined;
            this._ip = undefined;
            this._redirect.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._asn = value.asn;
            this._comment = value.comment;
            this._hostname.internalValue = value.hostname;
            this._ip = value.ip;
            this._redirect.internalValue = value.redirect;
        }
    }
    // asn - computed: false, optional: true, required: false
    _asn;
    get asn() {
        return this.getNumberAttribute('asn');
    }
    set asn(value) {
        this._asn = value;
    }
    resetAsn() {
        this._asn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get asnInput() {
        return this._asn;
    }
    // comment - computed: false, optional: true, required: false
    _comment;
    get comment() {
        return this.getStringAttribute('comment');
    }
    set comment(value) {
        this._comment = value;
    }
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment;
    }
    // hostname - computed: false, optional: true, required: false
    _hostname = new ListItemsHostnameOutputReference(this, "hostname");
    get hostname() {
        return this._hostname;
    }
    putHostname(value) {
        this._hostname.internalValue = value;
    }
    resetHostname() {
        this._hostname.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname.internalValue;
    }
    // ip - computed: false, optional: true, required: false
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    resetIp() {
        this._ip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
    // redirect - computed: false, optional: true, required: false
    _redirect = new ListItemsRedirectOutputReference(this, "redirect");
    get redirect() {
        return this._redirect;
    }
    putRedirect(value) {
        this._redirect.internalValue = value;
    }
    resetRedirect() {
        this._redirect.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redirectInput() {
        return this._redirect.internalValue;
    }
}
export class ListItemsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ListItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list cloudflare_list}
*/
export class List extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_list";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a List resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the List to import
    * @param importFromId The id of the existing List that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the List to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list cloudflare_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ListConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_list',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
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
        this._description = config.description;
        this._items.internalValue = config.items;
        this._kind = config.kind;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // items - computed: false, optional: true, required: false
    _items = new ListItemsList(this, "items", true);
    get items() {
        return this._items;
    }
    putItems(value) {
        this._items.internalValue = value;
    }
    resetItems() {
        this._items.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items.internalValue;
    }
    // kind - computed: false, optional: false, required: true
    _kind;
    get kind() {
        return this.getStringAttribute('kind');
    }
    set kind(value) {
        this._kind = value;
    }
    // Temporarily expose input value. Use with caution.
    get kindInput() {
        return this._kind;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // num_items - computed: true, optional: false, required: false
    get numItems() {
        return this.getNumberAttribute('num_items');
    }
    // num_referencing_filters - computed: true, optional: false, required: false
    get numReferencingFilters() {
        return this.getNumberAttribute('num_referencing_filters');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            items: cdktf.listMapper(listItemsToTerraform, false)(this._items.internalValue),
            kind: cdktf.stringToTerraform(this._kind),
            name: cdktf.stringToTerraform(this._name),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            items: {
                value: cdktf.listMapperHcl(listItemsToHclTerraform, false)(this._items.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ListItemsList",
            },
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
