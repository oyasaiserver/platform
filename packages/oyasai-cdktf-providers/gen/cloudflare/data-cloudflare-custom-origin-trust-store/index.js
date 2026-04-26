// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareCustomOriginTrustStoreFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        limit: cdktf.numberToTerraform(struct.limit),
        offset: cdktf.numberToTerraform(struct.offset),
    };
}
export function dataCloudflareCustomOriginTrustStoreFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        limit: {
            value: cdktf.numberToHclTerraform(struct.limit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        offset: {
            value: cdktf.numberToHclTerraform(struct.offset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareCustomOriginTrustStoreFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._limit !== undefined) {
            hasAnyValues = true;
            internalValueResult.limit = this._limit;
        }
        if (this._offset !== undefined) {
            hasAnyValues = true;
            internalValueResult.offset = this._offset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limit = undefined;
            this._offset = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limit = value.limit;
            this._offset = value.offset;
        }
    }
    // limit - computed: false, optional: true, required: false
    _limit;
    get limit() {
        return this.getNumberAttribute('limit');
    }
    set limit(value) {
        this._limit = value;
    }
    resetLimit() {
        this._limit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitInput() {
        return this._limit;
    }
    // offset - computed: false, optional: true, required: false
    _offset;
    get offset() {
        return this.getNumberAttribute('offset');
    }
    set offset(value) {
        this._offset = value;
    }
    resetOffset() {
        this._offset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get offsetInput() {
        return this._offset;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store cloudflare_custom_origin_trust_store}
*/
export class DataCloudflareCustomOriginTrustStore extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_custom_origin_trust_store";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomOriginTrustStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomOriginTrustStore to import
    * @param importFromId The id of the existing DataCloudflareCustomOriginTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomOriginTrustStore to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_origin_trust_store", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store cloudflare_custom_origin_trust_store} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomOriginTrustStoreConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_custom_origin_trust_store',
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
        this._customOriginTrustStoreId = config.customOriginTrustStoreId;
        this._filter.internalValue = config.filter;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // certificate - computed: true, optional: false, required: false
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    // custom_origin_trust_store_id - computed: false, optional: true, required: false
    _customOriginTrustStoreId;
    get customOriginTrustStoreId() {
        return this.getStringAttribute('custom_origin_trust_store_id');
    }
    set customOriginTrustStoreId(value) {
        this._customOriginTrustStoreId = value;
    }
    resetCustomOriginTrustStoreId() {
        this._customOriginTrustStoreId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customOriginTrustStoreIdInput() {
        return this._customOriginTrustStoreId;
    }
    // expires_on - computed: true, optional: false, required: false
    get expiresOn() {
        return this.getStringAttribute('expires_on');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareCustomOriginTrustStoreFilterOutputReference(this, "filter");
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
    // issuer - computed: true, optional: false, required: false
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    // signature - computed: true, optional: false, required: false
    get signature() {
        return this.getStringAttribute('signature');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // uploaded_on - computed: true, optional: false, required: false
    get uploadedOn() {
        return this.getStringAttribute('uploaded_on');
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
            custom_origin_trust_store_id: cdktf.stringToTerraform(this._customOriginTrustStoreId),
            filter: dataCloudflareCustomOriginTrustStoreFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            custom_origin_trust_store_id: {
                value: cdktf.stringToHclTerraform(this._customOriginTrustStoreId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareCustomOriginTrustStoreFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareCustomOriginTrustStoreFilter",
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
