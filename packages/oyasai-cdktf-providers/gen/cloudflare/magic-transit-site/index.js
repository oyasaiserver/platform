// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function magicTransitSiteLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lat: cdktf.stringToTerraform(struct.lat),
        lon: cdktf.stringToTerraform(struct.lon),
    };
}
export function magicTransitSiteLocationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lat: {
            value: cdktf.stringToHclTerraform(struct.lat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lon: {
            value: cdktf.stringToHclTerraform(struct.lon),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class MagicTransitSiteLocationOutputReference extends cdktf.ComplexObject {
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
        if (this._lat !== undefined) {
            hasAnyValues = true;
            internalValueResult.lat = this._lat;
        }
        if (this._lon !== undefined) {
            hasAnyValues = true;
            internalValueResult.lon = this._lon;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lat = undefined;
            this._lon = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lat = value.lat;
            this._lon = value.lon;
        }
    }
    // lat - computed: false, optional: true, required: false
    _lat;
    get lat() {
        return this.getStringAttribute('lat');
    }
    set lat(value) {
        this._lat = value;
    }
    resetLat() {
        this._lat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get latInput() {
        return this._lat;
    }
    // lon - computed: false, optional: true, required: false
    _lon;
    get lon() {
        return this.getStringAttribute('lon');
    }
    set lon(value) {
        this._lon = value;
    }
    resetLon() {
        this._lon = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lonInput() {
        return this._lon;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site cloudflare_magic_transit_site}
*/
export class MagicTransitSite extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_transit_site";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicTransitSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSite to import
    * @param importFromId The id of the existing MagicTransitSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSite to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site cloudflare_magic_transit_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site',
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
        this._connectorId = config.connectorId;
        this._description = config.description;
        this._haMode = config.haMode;
        this._location.internalValue = config.location;
        this._name = config.name;
        this._secondaryConnectorId = config.secondaryConnectorId;
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
    // connector_id - computed: false, optional: true, required: false
    _connectorId;
    get connectorId() {
        return this.getStringAttribute('connector_id');
    }
    set connectorId(value) {
        this._connectorId = value;
    }
    resetConnectorId() {
        this._connectorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectorIdInput() {
        return this._connectorId;
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
    // ha_mode - computed: false, optional: true, required: false
    _haMode;
    get haMode() {
        return this.getBooleanAttribute('ha_mode');
    }
    set haMode(value) {
        this._haMode = value;
    }
    resetHaMode() {
        this._haMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get haModeInput() {
        return this._haMode;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // location - computed: false, optional: true, required: false
    _location = new MagicTransitSiteLocationOutputReference(this, "location");
    get location() {
        return this._location;
    }
    putLocation(value) {
        this._location.internalValue = value;
    }
    resetLocation() {
        this._location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get locationInput() {
        return this._location.internalValue;
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
    // secondary_connector_id - computed: false, optional: true, required: false
    _secondaryConnectorId;
    get secondaryConnectorId() {
        return this.getStringAttribute('secondary_connector_id');
    }
    set secondaryConnectorId(value) {
        this._secondaryConnectorId = value;
    }
    resetSecondaryConnectorId() {
        this._secondaryConnectorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secondaryConnectorIdInput() {
        return this._secondaryConnectorId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            connector_id: cdktf.stringToTerraform(this._connectorId),
            description: cdktf.stringToTerraform(this._description),
            ha_mode: cdktf.booleanToTerraform(this._haMode),
            location: magicTransitSiteLocationToTerraform(this._location.internalValue),
            name: cdktf.stringToTerraform(this._name),
            secondary_connector_id: cdktf.stringToTerraform(this._secondaryConnectorId),
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
            connector_id: {
                value: cdktf.stringToHclTerraform(this._connectorId),
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
            ha_mode: {
                value: cdktf.booleanToHclTerraform(this._haMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            location: {
                value: magicTransitSiteLocationToHclTerraform(this._location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteLocation",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secondary_connector_id: {
                value: cdktf.stringToHclTerraform(this._secondaryConnectorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
