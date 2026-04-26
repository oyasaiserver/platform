// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zoneSubscriptionRatePlanToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export function zoneSubscriptionRatePlanToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZoneSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._scope = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._scope = value.scope;
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
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // is_contract - computed: true, optional: false, required: false
    get isContract() {
        return this.getBooleanAttribute('is_contract');
    }
    // public_name - computed: true, optional: false, required: false
    get publicName() {
        return this.getStringAttribute('public_name');
    }
    // scope - computed: true, optional: true, required: false
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    // sets - computed: true, optional: false, required: false
    get sets() {
        return this.getListAttribute('sets');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription cloudflare_zone_subscription}
*/
export class ZoneSubscription extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone_subscription";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneSubscription to import
    * @param importFromId The id of the existing ZoneSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneSubscription to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_subscription", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription cloudflare_zone_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneSubscriptionConfig
    */
    constructor(scope, id, config) {
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
        this._frequency = config.frequency;
        this._ratePlan.internalValue = config.ratePlan;
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
    // frequency - computed: true, optional: true, required: false
    _frequency;
    get frequency() {
        return this.getStringAttribute('frequency');
    }
    set frequency(value) {
        this._frequency = value;
    }
    resetFrequency() {
        this._frequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get frequencyInput() {
        return this._frequency;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // price - computed: true, optional: false, required: false
    get price() {
        return this.getNumberAttribute('price');
    }
    // rate_plan - computed: true, optional: true, required: false
    _ratePlan = new ZoneSubscriptionRatePlanOutputReference(this, "rate_plan");
    get ratePlan() {
        return this._ratePlan;
    }
    putRatePlan(value) {
        this._ratePlan.internalValue = value;
    }
    resetRatePlan() {
        this._ratePlan.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ratePlanInput() {
        return this._ratePlan.internalValue;
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
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
            frequency: cdktf.stringToTerraform(this._frequency),
            rate_plan: zoneSubscriptionRatePlanToTerraform(this._ratePlan.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            frequency: {
                value: cdktf.stringToHclTerraform(this._frequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rate_plan: {
                value: zoneSubscriptionRatePlanToHclTerraform(this._ratePlan.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneSubscriptionRatePlan",
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
