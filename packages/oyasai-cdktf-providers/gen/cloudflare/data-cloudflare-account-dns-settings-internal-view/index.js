// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareAccountDnsSettingsInternalViewFilterNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
export function dataCloudflareAccountDnsSettingsInternalViewFilterNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference extends cdktf.ComplexObject {
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
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._endswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.endswith = this._endswith;
        }
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._startswith !== undefined) {
            hasAnyValues = true;
            internalValueResult.startswith = this._startswith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contains = undefined;
            this._endswith = undefined;
            this._exact = undefined;
            this._startswith = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contains = value.contains;
            this._endswith = value.endswith;
            this._exact = value.exact;
            this._startswith = value.startswith;
        }
    }
    // contains - computed: false, optional: true, required: false
    _contains;
    get contains() {
        return this.getStringAttribute('contains');
    }
    set contains(value) {
        this._contains = value;
    }
    resetContains() {
        this._contains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containsInput() {
        return this._contains;
    }
    // endswith - computed: false, optional: true, required: false
    _endswith;
    get endswith() {
        return this.getStringAttribute('endswith');
    }
    set endswith(value) {
        this._endswith = value;
    }
    resetEndswith() {
        this._endswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endswithInput() {
        return this._endswith;
    }
    // exact - computed: false, optional: true, required: false
    _exact;
    get exact() {
        return this.getStringAttribute('exact');
    }
    set exact(value) {
        this._exact = value;
    }
    resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get exactInput() {
        return this._exact;
    }
    // startswith - computed: false, optional: true, required: false
    _startswith;
    get startswith() {
        return this.getStringAttribute('startswith');
    }
    set startswith(value) {
        this._startswith = value;
    }
    resetStartswith() {
        this._startswith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startswithInput() {
        return this._startswith;
    }
}
export function dataCloudflareAccountDnsSettingsInternalViewFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        match: cdktf.stringToTerraform(struct.match),
        name: dataCloudflareAccountDnsSettingsInternalViewFilterNameToTerraform(struct.name),
        order: cdktf.stringToTerraform(struct.order),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
        zone_name: cdktf.stringToTerraform(struct.zoneName),
    };
}
export function dataCloudflareAccountDnsSettingsInternalViewFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match: {
            value: cdktf.stringToHclTerraform(struct.match),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: dataCloudflareAccountDnsSettingsInternalViewFilterNameToHclTerraform(struct.name),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareAccountDnsSettingsInternalViewFilterName",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_id: {
            value: cdktf.stringToHclTerraform(struct.zoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_name: {
            value: cdktf.stringToHclTerraform(struct.zoneName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._match !== undefined) {
            hasAnyValues = true;
            internalValueResult.match = this._match;
        }
        if (this._name?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name?.internalValue;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._zoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneId = this._zoneId;
        }
        if (this._zoneName !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneName = this._zoneName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._direction = undefined;
            this._match = undefined;
            this._name.internalValue = undefined;
            this._order = undefined;
            this._zoneId = undefined;
            this._zoneName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._direction = value.direction;
            this._match = value.match;
            this._name.internalValue = value.name;
            this._order = value.order;
            this._zoneId = value.zoneId;
            this._zoneName = value.zoneName;
        }
    }
    // direction - computed: true, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    // match - computed: true, optional: true, required: false
    _match;
    get match() {
        return this.getStringAttribute('match');
    }
    set match(value) {
        this._match = value;
    }
    resetMatch() {
        this._match = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get matchInput() {
        return this._match;
    }
    // name - computed: false, optional: true, required: false
    _name = new DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference(this, "name");
    get name() {
        return this._name;
    }
    putName(value) {
        this._name.internalValue = value;
    }
    resetName() {
        this._name.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name.internalValue;
    }
    // order - computed: false, optional: true, required: false
    _order;
    get order() {
        return this.getStringAttribute('order');
    }
    set order(value) {
        this._order = value;
    }
    resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderInput() {
        return this._order;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // zone_name - computed: false, optional: true, required: false
    _zoneName;
    get zoneName() {
        return this.getStringAttribute('zone_name');
    }
    set zoneName(value) {
        this._zoneName = value;
    }
    resetZoneName() {
        this._zoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneNameInput() {
        return this._zoneName;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view}
*/
export class DataCloudflareAccountDnsSettingsInternalView extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_account_dns_settings_internal_view";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalView resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalView to import
    * @param importFromId The id of the existing DataCloudflareAccountDnsSettingsInternalView that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalView to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings_internal_view", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountDnsSettingsInternalViewConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_account_dns_settings_internal_view',
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
        this._filter.internalValue = config.filter;
        this._viewId = config.viewId;
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
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_time - computed: true, optional: false, required: false
    get modifiedTime() {
        return this.getStringAttribute('modified_time');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // view_id - computed: false, optional: true, required: false
    _viewId;
    get viewId() {
        return this.getStringAttribute('view_id');
    }
    set viewId(value) {
        this._viewId = value;
    }
    resetViewId() {
        this._viewId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get viewIdInput() {
        return this._viewId;
    }
    // zones - computed: true, optional: false, required: false
    get zones() {
        return cdktf.Fn.tolist(this.getListAttribute('zones'));
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareAccountDnsSettingsInternalViewFilterToTerraform(this._filter.internalValue),
            view_id: cdktf.stringToTerraform(this._viewId),
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
            filter: {
                value: dataCloudflareAccountDnsSettingsInternalViewFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAccountDnsSettingsInternalViewFilter",
            },
            view_id: {
                value: cdktf.stringToHclTerraform(this._viewId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
