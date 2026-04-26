// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_subscription
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZoneSubscriptionRatePlanToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZoneSubscriptionRatePlanToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZoneSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
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
    // currency - computed: true, optional: false, required: false
    get currency() {
        return this.getStringAttribute('currency');
    }
    // externally_managed - computed: true, optional: false, required: false
    get externallyManaged() {
        return this.getBooleanAttribute('externally_managed');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_contract - computed: true, optional: false, required: false
    get isContract() {
        return this.getBooleanAttribute('is_contract');
    }
    // public_name - computed: true, optional: false, required: false
    get publicName() {
        return this.getStringAttribute('public_name');
    }
    // scope - computed: true, optional: false, required: false
    get scope() {
        return this.getStringAttribute('scope');
    }
    // sets - computed: true, optional: false, required: false
    get sets() {
        return this.getListAttribute('sets');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_subscription cloudflare_zone_subscription}
*/
export class DataCloudflareZoneSubscription extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone_subscription";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneSubscription to import
    * @param importFromId The id of the existing DataCloudflareZoneSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneSubscription to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_subscription", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_subscription cloudflare_zone_subscription} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneSubscriptionConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zone_subscription',
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
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // currency - computed: true, optional: false, required: false
    get currency() {
        return this.getStringAttribute('currency');
    }
    // current_period_end - computed: true, optional: false, required: false
    get currentPeriodEnd() {
        return this.getStringAttribute('current_period_end');
    }
    // current_period_start - computed: true, optional: false, required: false
    get currentPeriodStart() {
        return this.getStringAttribute('current_period_start');
    }
    // frequency - computed: true, optional: false, required: false
    get frequency() {
        return this.getStringAttribute('frequency');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // price - computed: true, optional: false, required: false
    get price() {
        return this.getNumberAttribute('price');
    }
    // rate_plan - computed: true, optional: false, required: false
    _ratePlan = new DataCloudflareZoneSubscriptionRatePlanOutputReference(this, "rate_plan");
    get ratePlan() {
        return this._ratePlan;
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
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
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
