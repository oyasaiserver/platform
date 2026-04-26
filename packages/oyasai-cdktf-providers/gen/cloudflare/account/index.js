// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function accountManagedByToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function accountManagedByToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class AccountManagedByOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
    // parent_org_id - computed: true, optional: false, required: false
    get parentOrgId() {
        return this.getStringAttribute('parent_org_id');
    }
    // parent_org_name - computed: true, optional: false, required: false
    get parentOrgName() {
        return this.getStringAttribute('parent_org_name');
    }
}
export function accountSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        abuse_contact_email: cdktf.stringToTerraform(struct.abuseContactEmail),
        enforce_twofactor: cdktf.booleanToTerraform(struct.enforceTwofactor),
    };
}
export function accountSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        abuse_contact_email: {
            value: cdktf.stringToHclTerraform(struct.abuseContactEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enforce_twofactor: {
            value: cdktf.booleanToHclTerraform(struct.enforceTwofactor),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AccountSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._abuseContactEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.abuseContactEmail = this._abuseContactEmail;
        }
        if (this._enforceTwofactor !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforceTwofactor = this._enforceTwofactor;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._abuseContactEmail = undefined;
            this._enforceTwofactor = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._abuseContactEmail = value.abuseContactEmail;
            this._enforceTwofactor = value.enforceTwofactor;
        }
    }
    // abuse_contact_email - computed: true, optional: true, required: false
    _abuseContactEmail;
    get abuseContactEmail() {
        return this.getStringAttribute('abuse_contact_email');
    }
    set abuseContactEmail(value) {
        this._abuseContactEmail = value;
    }
    resetAbuseContactEmail() {
        this._abuseContactEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get abuseContactEmailInput() {
        return this._abuseContactEmail;
    }
    // enforce_twofactor - computed: true, optional: true, required: false
    _enforceTwofactor;
    get enforceTwofactor() {
        return this.getBooleanAttribute('enforce_twofactor');
    }
    set enforceTwofactor(value) {
        this._enforceTwofactor = value;
    }
    resetEnforceTwofactor() {
        this._enforceTwofactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enforceTwofactorInput() {
        return this._enforceTwofactor;
    }
}
export function accountUnitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function accountUnitToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AccountUnitOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account cloudflare_account}
*/
export class Account extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_account";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Account to import
    * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Account to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account cloudflare_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_account',
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
        this._managedBy.internalValue = config.managedBy;
        this._name = config.name;
        this._settings.internalValue = config.settings;
        this._type = config.type;
        this._unit.internalValue = config.unit;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // managed_by - computed: true, optional: true, required: false
    _managedBy = new AccountManagedByOutputReference(this, "managed_by");
    get managedBy() {
        return this._managedBy;
    }
    putManagedBy(value) {
        this._managedBy.internalValue = value;
    }
    resetManagedBy() {
        this._managedBy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get managedByInput() {
        return this._managedBy.internalValue;
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
    // settings - computed: true, optional: true, required: false
    _settings = new AccountSettingsOutputReference(this, "settings");
    get settings() {
        return this._settings;
    }
    putSettings(value) {
        this._settings.internalValue = value;
    }
    resetSettings() {
        this._settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get settingsInput() {
        return this._settings.internalValue;
    }
    // type - computed: true, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // unit - computed: true, optional: true, required: false
    _unit = new AccountUnitOutputReference(this, "unit");
    get unit() {
        return this._unit;
    }
    putUnit(value) {
        this._unit.internalValue = value;
    }
    resetUnit() {
        this._unit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            managed_by: accountManagedByToTerraform(this._managedBy.internalValue),
            name: cdktf.stringToTerraform(this._name),
            settings: accountSettingsToTerraform(this._settings.internalValue),
            type: cdktf.stringToTerraform(this._type),
            unit: accountUnitToTerraform(this._unit.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            managed_by: {
                value: accountManagedByToHclTerraform(this._managedBy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountManagedBy",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            settings: {
                value: accountSettingsToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountSettings",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            unit: {
                value: accountUnitToHclTerraform(this._unit.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountUnit",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
