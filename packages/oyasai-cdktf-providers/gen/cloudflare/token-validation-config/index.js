// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function tokenValidationConfigCredentialsKeysToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alg: cdktf.stringToTerraform(struct.alg),
        crv: cdktf.stringToTerraform(struct.crv),
        e: cdktf.stringToTerraform(struct.e),
        kid: cdktf.stringToTerraform(struct.kid),
        kty: cdktf.stringToTerraform(struct.kty),
        n: cdktf.stringToTerraform(struct.n),
        x: cdktf.stringToTerraform(struct.x),
        y: cdktf.stringToTerraform(struct.y),
    };
}
export function tokenValidationConfigCredentialsKeysToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        alg: {
            value: cdktf.stringToHclTerraform(struct.alg),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        crv: {
            value: cdktf.stringToHclTerraform(struct.crv),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        e: {
            value: cdktf.stringToHclTerraform(struct.e),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kid: {
            value: cdktf.stringToHclTerraform(struct.kid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kty: {
            value: cdktf.stringToHclTerraform(struct.kty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        n: {
            value: cdktf.stringToHclTerraform(struct.n),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        x: {
            value: cdktf.stringToHclTerraform(struct.x),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        y: {
            value: cdktf.stringToHclTerraform(struct.y),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class TokenValidationConfigCredentialsKeysOutputReference extends cdktf.ComplexObject {
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
        if (this._alg !== undefined) {
            hasAnyValues = true;
            internalValueResult.alg = this._alg;
        }
        if (this._crv !== undefined) {
            hasAnyValues = true;
            internalValueResult.crv = this._crv;
        }
        if (this._e !== undefined) {
            hasAnyValues = true;
            internalValueResult.e = this._e;
        }
        if (this._kid !== undefined) {
            hasAnyValues = true;
            internalValueResult.kid = this._kid;
        }
        if (this._kty !== undefined) {
            hasAnyValues = true;
            internalValueResult.kty = this._kty;
        }
        if (this._n !== undefined) {
            hasAnyValues = true;
            internalValueResult.n = this._n;
        }
        if (this._x !== undefined) {
            hasAnyValues = true;
            internalValueResult.x = this._x;
        }
        if (this._y !== undefined) {
            hasAnyValues = true;
            internalValueResult.y = this._y;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alg = undefined;
            this._crv = undefined;
            this._e = undefined;
            this._kid = undefined;
            this._kty = undefined;
            this._n = undefined;
            this._x = undefined;
            this._y = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alg = value.alg;
            this._crv = value.crv;
            this._e = value.e;
            this._kid = value.kid;
            this._kty = value.kty;
            this._n = value.n;
            this._x = value.x;
            this._y = value.y;
        }
    }
    // alg - computed: false, optional: false, required: true
    _alg;
    get alg() {
        return this.getStringAttribute('alg');
    }
    set alg(value) {
        this._alg = value;
    }
    // Temporarily expose input value. Use with caution.
    get algInput() {
        return this._alg;
    }
    // crv - computed: false, optional: true, required: false
    _crv;
    get crv() {
        return this.getStringAttribute('crv');
    }
    set crv(value) {
        this._crv = value;
    }
    resetCrv() {
        this._crv = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get crvInput() {
        return this._crv;
    }
    // e - computed: false, optional: true, required: false
    _e;
    get e() {
        return this.getStringAttribute('e');
    }
    set e(value) {
        this._e = value;
    }
    resetE() {
        this._e = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eInput() {
        return this._e;
    }
    // kid - computed: false, optional: false, required: true
    _kid;
    get kid() {
        return this.getStringAttribute('kid');
    }
    set kid(value) {
        this._kid = value;
    }
    // Temporarily expose input value. Use with caution.
    get kidInput() {
        return this._kid;
    }
    // kty - computed: false, optional: false, required: true
    _kty;
    get kty() {
        return this.getStringAttribute('kty');
    }
    set kty(value) {
        this._kty = value;
    }
    // Temporarily expose input value. Use with caution.
    get ktyInput() {
        return this._kty;
    }
    // n - computed: false, optional: true, required: false
    _n;
    get n() {
        return this.getStringAttribute('n');
    }
    set n(value) {
        this._n = value;
    }
    resetN() {
        this._n = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nInput() {
        return this._n;
    }
    // x - computed: false, optional: true, required: false
    _x;
    get x() {
        return this.getStringAttribute('x');
    }
    set x(value) {
        this._x = value;
    }
    resetX() {
        this._x = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get xInput() {
        return this._x;
    }
    // y - computed: false, optional: true, required: false
    _y;
    get y() {
        return this.getStringAttribute('y');
    }
    set y(value) {
        this._y = value;
    }
    resetY() {
        this._y = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get yInput() {
        return this._y;
    }
}
export class TokenValidationConfigCredentialsKeysList extends cdktf.ComplexList {
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
        return new TokenValidationConfigCredentialsKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function tokenValidationConfigCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        keys: cdktf.listMapper(tokenValidationConfigCredentialsKeysToTerraform, false)(struct.keys),
    };
}
export function tokenValidationConfigCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        keys: {
            value: cdktf.listMapperHcl(tokenValidationConfigCredentialsKeysToHclTerraform, false)(struct.keys),
            isBlock: true,
            type: "list",
            storageClassType: "TokenValidationConfigCredentialsKeysList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class TokenValidationConfigCredentialsOutputReference extends cdktf.ComplexObject {
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
        if (this._keys?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keys = this._keys?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keys.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keys.internalValue = value.keys;
        }
    }
    // keys - computed: false, optional: false, required: true
    _keys = new TokenValidationConfigCredentialsKeysList(this, "keys", false);
    get keys() {
        return this._keys;
    }
    putKeys(value) {
        this._keys.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get keysInput() {
        return this._keys.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config cloudflare_token_validation_config}
*/
export class TokenValidationConfig extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_token_validation_config";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TokenValidationConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TokenValidationConfig to import
    * @param importFromId The id of the existing TokenValidationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TokenValidationConfig to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_config", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config cloudflare_token_validation_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TokenValidationConfigConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_token_validation_config',
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
        this._credentials.internalValue = config.credentials;
        this._description = config.description;
        this._title = config.title;
        this._tokenSources = config.tokenSources;
        this._tokenType = config.tokenType;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // credentials - computed: false, optional: false, required: true
    _credentials = new TokenValidationConfigCredentialsOutputReference(this, "credentials");
    get credentials() {
        return this._credentials;
    }
    putCredentials(value) {
        this._credentials.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get credentialsInput() {
        return this._credentials.internalValue;
    }
    // description - computed: false, optional: false, required: true
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // title - computed: false, optional: false, required: true
    _title;
    get title() {
        return this.getStringAttribute('title');
    }
    set title(value) {
        this._title = value;
    }
    // Temporarily expose input value. Use with caution.
    get titleInput() {
        return this._title;
    }
    // token_sources - computed: false, optional: false, required: true
    _tokenSources;
    get tokenSources() {
        return this.getListAttribute('token_sources');
    }
    set tokenSources(value) {
        this._tokenSources = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenSourcesInput() {
        return this._tokenSources;
    }
    // token_type - computed: false, optional: false, required: true
    _tokenType;
    get tokenType() {
        return this.getStringAttribute('token_type');
    }
    set tokenType(value) {
        this._tokenType = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenTypeInput() {
        return this._tokenType;
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
            credentials: tokenValidationConfigCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            title: cdktf.stringToTerraform(this._title),
            token_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenSources),
            token_type: cdktf.stringToTerraform(this._tokenType),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            credentials: {
                value: tokenValidationConfigCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "TokenValidationConfigCredentials",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktf.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_sources: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenSources),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            token_type: {
                value: cdktf.stringToHclTerraform(this._tokenType),
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
