"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDockerRegistryImageManifests = exports.DataDockerRegistryImageManifestsAuthConfigOutputReference = exports.DataDockerRegistryImageManifestsManifestsList = exports.DataDockerRegistryImageManifestsManifestsOutputReference = void 0;
exports.dataDockerRegistryImageManifestsManifestsToTerraform = dataDockerRegistryImageManifestsManifestsToTerraform;
exports.dataDockerRegistryImageManifestsManifestsToHclTerraform = dataDockerRegistryImageManifestsManifestsToHclTerraform;
exports.dataDockerRegistryImageManifestsAuthConfigToTerraform = dataDockerRegistryImageManifestsAuthConfigToTerraform;
exports.dataDockerRegistryImageManifestsAuthConfigToHclTerraform = dataDockerRegistryImageManifestsAuthConfigToHclTerraform;
var cdktf = require("cdktf");
function dataDockerRegistryImageManifestsManifestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataDockerRegistryImageManifestsManifestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataDockerRegistryImageManifestsManifestsOutputReference = /** @class */ (function (_super) {
    __extends(DataDockerRegistryImageManifestsManifestsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataDockerRegistryImageManifestsManifestsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataDockerRegistryImageManifestsManifestsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifestsManifestsOutputReference.prototype, "architecture", {
        // architecture - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('architecture');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifestsManifestsOutputReference.prototype, "mediaType", {
        // media_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('media_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifestsManifestsOutputReference.prototype, "os", {
        // os - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifestsManifestsOutputReference.prototype, "sha256Digest", {
        // sha256_digest - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha256_digest');
        },
        enumerable: false,
        configurable: true
    });
    return DataDockerRegistryImageManifestsManifestsOutputReference;
}(cdktf.ComplexObject));
exports.DataDockerRegistryImageManifestsManifestsOutputReference = DataDockerRegistryImageManifestsManifestsOutputReference;
var DataDockerRegistryImageManifestsManifestsList = /** @class */ (function (_super) {
    __extends(DataDockerRegistryImageManifestsManifestsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataDockerRegistryImageManifestsManifestsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataDockerRegistryImageManifestsManifestsList.prototype.get = function (index) {
        return new DataDockerRegistryImageManifestsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataDockerRegistryImageManifestsManifestsList;
}(cdktf.ComplexList));
exports.DataDockerRegistryImageManifestsManifestsList = DataDockerRegistryImageManifestsManifestsList;
function dataDockerRegistryImageManifestsAuthConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function dataDockerRegistryImageManifestsAuthConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataDockerRegistryImageManifestsAuthConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataDockerRegistryImageManifestsAuthConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataDockerRegistryImageManifestsAuthConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._address !== undefined) {
                hasAnyValues = true;
                internalValueResult.address = this._address;
            }
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
            }
            if (this._username !== undefined) {
                hasAnyValues = true;
                internalValueResult.username = this._username;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._address = undefined;
                this._password = undefined;
                this._username = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._address = value.address;
                this._password = value.password;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype.resetPassword = function () {
        this._password = undefined;
    };
    Object.defineProperty(DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype.resetUsername = function () {
        this._username = undefined;
    };
    Object.defineProperty(DataDockerRegistryImageManifestsAuthConfigOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return DataDockerRegistryImageManifestsAuthConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataDockerRegistryImageManifestsAuthConfigOutputReference = DataDockerRegistryImageManifestsAuthConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests docker_registry_image_manifests}
*/
var DataDockerRegistryImageManifests = /** @class */ (function (_super) {
    __extends(DataDockerRegistryImageManifests, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests docker_registry_image_manifests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageManifestsConfig
    */
    function DataDockerRegistryImageManifests(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_registry_image_manifests',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // manifests - computed: true, optional: false, required: false
        _this._manifests = new DataDockerRegistryImageManifestsManifestsList(_this, "manifests", true);
        // auth_config - computed: false, optional: true, required: false
        _this._authConfig = new DataDockerRegistryImageManifestsAuthConfigOutputReference(_this, "auth_config");
        _this._id = config.id;
        _this._insecureSkipVerify = config.insecureSkipVerify;
        _this._name = config.name;
        _this._authConfig.internalValue = config.authConfig;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImageManifests to import
    * @param importFromId The id of the existing DataDockerRegistryImageManifests that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImageManifests to import is found
    */
    DataDockerRegistryImageManifests.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image_manifests", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImageManifests.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "insecureSkipVerify", {
        get: function () {
            return this.getBooleanAttribute('insecure_skip_verify');
        },
        set: function (value) {
            this._insecureSkipVerify = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImageManifests.prototype.resetInsecureSkipVerify = function () {
        this._insecureSkipVerify = undefined;
    };
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "insecureSkipVerifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insecureSkipVerify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "manifests", {
        get: function () {
            return this._manifests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "authConfig", {
        get: function () {
            return this._authConfig;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerRegistryImageManifests.prototype.putAuthConfig = function (value) {
        this._authConfig.internalValue = value;
    };
    DataDockerRegistryImageManifests.prototype.resetAuthConfig = function () {
        this._authConfig.internalValue = undefined;
    };
    Object.defineProperty(DataDockerRegistryImageManifests.prototype, "authConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataDockerRegistryImageManifests.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
            name: cdktf.stringToTerraform(this._name),
            auth_config: dataDockerRegistryImageManifestsAuthConfigToTerraform(this._authConfig.internalValue),
        };
    };
    DataDockerRegistryImageManifests.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insecure_skip_verify: {
                value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth_config: {
                value: dataDockerRegistryImageManifestsAuthConfigToHclTerraform(this._authConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "DataDockerRegistryImageManifestsAuthConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataDockerRegistryImageManifests.tfResourceType = "docker_registry_image_manifests";
    return DataDockerRegistryImageManifests;
}(cdktf.TerraformDataSource));
exports.DataDockerRegistryImageManifests = DataDockerRegistryImageManifests;
