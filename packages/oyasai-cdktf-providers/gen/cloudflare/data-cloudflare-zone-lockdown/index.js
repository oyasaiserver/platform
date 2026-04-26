// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZoneLockdownConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZoneLockdownConfigurationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZoneLockdownConfigurationsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // target - computed: true, optional: false, required: false
    get target() {
        return this.getStringAttribute('target');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
export class DataCloudflareZoneLockdownConfigurationsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
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
        return new DataCloudflareZoneLockdownConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZoneLockdownFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        created_on: cdktf.stringToTerraform(struct.createdOn),
        description: cdktf.stringToTerraform(struct.description),
        description_search: cdktf.stringToTerraform(struct.descriptionSearch),
        ip: cdktf.stringToTerraform(struct.ip),
        ip_range_search: cdktf.stringToTerraform(struct.ipRangeSearch),
        ip_search: cdktf.stringToTerraform(struct.ipSearch),
        modified_on: cdktf.stringToTerraform(struct.modifiedOn),
        priority: cdktf.numberToTerraform(struct.priority),
        uri_search: cdktf.stringToTerraform(struct.uriSearch),
    };
}
export function dataCloudflareZoneLockdownFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        created_on: {
            value: cdktf.stringToHclTerraform(struct.createdOn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description_search: {
            value: cdktf.stringToHclTerraform(struct.descriptionSearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_range_search: {
            value: cdktf.stringToHclTerraform(struct.ipRangeSearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_search: {
            value: cdktf.stringToHclTerraform(struct.ipSearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        modified_on: {
            value: cdktf.stringToHclTerraform(struct.modifiedOn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        uri_search: {
            value: cdktf.stringToHclTerraform(struct.uriSearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareZoneLockdownFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._createdOn !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdOn = this._createdOn;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._descriptionSearch !== undefined) {
            hasAnyValues = true;
            internalValueResult.descriptionSearch = this._descriptionSearch;
        }
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._ipRangeSearch !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipRangeSearch = this._ipRangeSearch;
        }
        if (this._ipSearch !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipSearch = this._ipSearch;
        }
        if (this._modifiedOn !== undefined) {
            hasAnyValues = true;
            internalValueResult.modifiedOn = this._modifiedOn;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._uriSearch !== undefined) {
            hasAnyValues = true;
            internalValueResult.uriSearch = this._uriSearch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createdOn = undefined;
            this._description = undefined;
            this._descriptionSearch = undefined;
            this._ip = undefined;
            this._ipRangeSearch = undefined;
            this._ipSearch = undefined;
            this._modifiedOn = undefined;
            this._priority = undefined;
            this._uriSearch = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createdOn = value.createdOn;
            this._description = value.description;
            this._descriptionSearch = value.descriptionSearch;
            this._ip = value.ip;
            this._ipRangeSearch = value.ipRangeSearch;
            this._ipSearch = value.ipSearch;
            this._modifiedOn = value.modifiedOn;
            this._priority = value.priority;
            this._uriSearch = value.uriSearch;
        }
    }
    // created_on - computed: false, optional: true, required: false
    _createdOn;
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    set createdOn(value) {
        this._createdOn = value;
    }
    resetCreatedOn() {
        this._createdOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdOnInput() {
        return this._createdOn;
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
    // description_search - computed: false, optional: true, required: false
    _descriptionSearch;
    get descriptionSearch() {
        return this.getStringAttribute('description_search');
    }
    set descriptionSearch(value) {
        this._descriptionSearch = value;
    }
    resetDescriptionSearch() {
        this._descriptionSearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionSearchInput() {
        return this._descriptionSearch;
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
    // ip_range_search - computed: false, optional: true, required: false
    _ipRangeSearch;
    get ipRangeSearch() {
        return this.getStringAttribute('ip_range_search');
    }
    set ipRangeSearch(value) {
        this._ipRangeSearch = value;
    }
    resetIpRangeSearch() {
        this._ipRangeSearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipRangeSearchInput() {
        return this._ipRangeSearch;
    }
    // ip_search - computed: false, optional: true, required: false
    _ipSearch;
    get ipSearch() {
        return this.getStringAttribute('ip_search');
    }
    set ipSearch(value) {
        this._ipSearch = value;
    }
    resetIpSearch() {
        this._ipSearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSearchInput() {
        return this._ipSearch;
    }
    // modified_on - computed: false, optional: true, required: false
    _modifiedOn;
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    set modifiedOn(value) {
        this._modifiedOn = value;
    }
    resetModifiedOn() {
        this._modifiedOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modifiedOnInput() {
        return this._modifiedOn;
    }
    // priority - computed: false, optional: true, required: false
    _priority;
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // uri_search - computed: false, optional: true, required: false
    _uriSearch;
    get uriSearch() {
        return this.getStringAttribute('uri_search');
    }
    set uriSearch(value) {
        this._uriSearch = value;
    }
    resetUriSearch() {
        this._uriSearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriSearchInput() {
        return this._uriSearch;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown}
*/
export class DataCloudflareZoneLockdown extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone_lockdown";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneLockdown to import
    * @param importFromId The id of the existing DataCloudflareZoneLockdown that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneLockdown to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_lockdown", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneLockdownConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zone_lockdown',
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
        this._filter.internalValue = config.filter;
        this._lockDownsId = config.lockDownsId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // configurations - computed: true, optional: false, required: false
    _configurations = new DataCloudflareZoneLockdownConfigurationsList(this, "configurations", false);
    get configurations() {
        return this._configurations;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareZoneLockdownFilterOutputReference(this, "filter");
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
    // lock_downs_id - computed: false, optional: true, required: false
    _lockDownsId;
    get lockDownsId() {
        return this.getStringAttribute('lock_downs_id');
    }
    set lockDownsId(value) {
        this._lockDownsId = value;
    }
    resetLockDownsId() {
        this._lockDownsId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lockDownsIdInput() {
        return this._lockDownsId;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // paused - computed: true, optional: false, required: false
    get paused() {
        return this.getBooleanAttribute('paused');
    }
    // urls - computed: true, optional: false, required: false
    get urls() {
        return this.getListAttribute('urls');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            filter: dataCloudflareZoneLockdownFilterToTerraform(this._filter.internalValue),
            lock_downs_id: cdktf.stringToTerraform(this._lockDownsId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            filter: {
                value: dataCloudflareZoneLockdownFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZoneLockdownFilter",
            },
            lock_downs_id: {
                value: cdktf.stringToHclTerraform(this._lockDownsId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
