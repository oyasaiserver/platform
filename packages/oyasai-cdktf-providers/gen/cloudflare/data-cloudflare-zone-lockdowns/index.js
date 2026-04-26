// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZoneLockdownsResultConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZoneLockdownsResultConfigurationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZoneLockdownsResultConfigurationsOutputReference extends cdktf.ComplexObject {
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
export class DataCloudflareZoneLockdownsResultConfigurationsList extends cdktf.ComplexList {
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
        return new DataCloudflareZoneLockdownsResultConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZoneLockdownsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZoneLockdownsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZoneLockdownsResultOutputReference extends cdktf.ComplexObject {
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
    // configurations - computed: true, optional: false, required: false
    _configurations = new DataCloudflareZoneLockdownsResultConfigurationsList(this, "configurations", false);
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
}
export class DataCloudflareZoneLockdownsResultList extends cdktf.ComplexList {
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
        return new DataCloudflareZoneLockdownsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns}
*/
export class DataCloudflareZoneLockdowns extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone_lockdowns";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneLockdowns to import
    * @param importFromId The id of the existing DataCloudflareZoneLockdowns that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneLockdowns to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_lockdowns", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneLockdownsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zone_lockdowns',
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
        this._createdOn = config.createdOn;
        this._description = config.description;
        this._descriptionSearch = config.descriptionSearch;
        this._ip = config.ip;
        this._ipRangeSearch = config.ipRangeSearch;
        this._ipSearch = config.ipSearch;
        this._maxItems = config.maxItems;
        this._modifiedOn = config.modifiedOn;
        this._priority = config.priority;
        this._uriSearch = config.uriSearch;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
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
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareZoneLockdownsResultList(this, "result", false);
    get result() {
        return this._result;
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
            created_on: cdktf.stringToTerraform(this._createdOn),
            description: cdktf.stringToTerraform(this._description),
            description_search: cdktf.stringToTerraform(this._descriptionSearch),
            ip: cdktf.stringToTerraform(this._ip),
            ip_range_search: cdktf.stringToTerraform(this._ipRangeSearch),
            ip_search: cdktf.stringToTerraform(this._ipSearch),
            max_items: cdktf.numberToTerraform(this._maxItems),
            modified_on: cdktf.stringToTerraform(this._modifiedOn),
            priority: cdktf.numberToTerraform(this._priority),
            uri_search: cdktf.stringToTerraform(this._uriSearch),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            created_on: {
                value: cdktf.stringToHclTerraform(this._createdOn),
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
            description_search: {
                value: cdktf.stringToHclTerraform(this._descriptionSearch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip: {
                value: cdktf.stringToHclTerraform(this._ip),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_range_search: {
                value: cdktf.stringToHclTerraform(this._ipRangeSearch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_search: {
                value: cdktf.stringToHclTerraform(this._ipSearch),
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
            modified_on: {
                value: cdktf.stringToHclTerraform(this._modifiedOn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            uri_search: {
                value: cdktf.stringToHclTerraform(this._uriSearch),
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
