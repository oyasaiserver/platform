"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/image
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
exports.Image = exports.ImageTimeoutsOutputReference = exports.ImageBuildOutputReference = exports.ImageBuildUlimitList = exports.ImageBuildUlimitOutputReference = exports.ImageBuildSecretsList = exports.ImageBuildSecretsOutputReference = exports.ImageBuildAuthConfigList = exports.ImageBuildAuthConfigOutputReference = void 0;
exports.imageBuildAuthConfigToTerraform = imageBuildAuthConfigToTerraform;
exports.imageBuildAuthConfigToHclTerraform = imageBuildAuthConfigToHclTerraform;
exports.imageBuildSecretsToTerraform = imageBuildSecretsToTerraform;
exports.imageBuildSecretsToHclTerraform = imageBuildSecretsToHclTerraform;
exports.imageBuildUlimitToTerraform = imageBuildUlimitToTerraform;
exports.imageBuildUlimitToHclTerraform = imageBuildUlimitToHclTerraform;
exports.imageBuildToTerraform = imageBuildToTerraform;
exports.imageBuildToHclTerraform = imageBuildToHclTerraform;
exports.imageTimeoutsToTerraform = imageTimeoutsToTerraform;
exports.imageTimeoutsToHclTerraform = imageTimeoutsToHclTerraform;
var cdktf = require("cdktf");
function imageBuildAuthConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth: cdktf.stringToTerraform(struct.auth),
        email: cdktf.stringToTerraform(struct.email),
        host_name: cdktf.stringToTerraform(struct.hostName),
        identity_token: cdktf.stringToTerraform(struct.identityToken),
        password: cdktf.stringToTerraform(struct.password),
        registry_token: cdktf.stringToTerraform(struct.registryToken),
        server_address: cdktf.stringToTerraform(struct.serverAddress),
        user_name: cdktf.stringToTerraform(struct.userName),
    };
}
function imageBuildAuthConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        auth: {
            value: cdktf.stringToHclTerraform(struct.auth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_name: {
            value: cdktf.stringToHclTerraform(struct.hostName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_token: {
            value: cdktf.stringToHclTerraform(struct.identityToken),
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
        registry_token: {
            value: cdktf.stringToHclTerraform(struct.registryToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_address: {
            value: cdktf.stringToHclTerraform(struct.serverAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_name: {
            value: cdktf.stringToHclTerraform(struct.userName),
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
var ImageBuildAuthConfigOutputReference = /** @class */ (function (_super) {
    __extends(ImageBuildAuthConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ImageBuildAuthConfigOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._auth !== undefined) {
                hasAnyValues = true;
                internalValueResult.auth = this._auth;
            }
            if (this._email !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = this._email;
            }
            if (this._hostName !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostName = this._hostName;
            }
            if (this._identityToken !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityToken = this._identityToken;
            }
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
            }
            if (this._registryToken !== undefined) {
                hasAnyValues = true;
                internalValueResult.registryToken = this._registryToken;
            }
            if (this._serverAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.serverAddress = this._serverAddress;
            }
            if (this._userName !== undefined) {
                hasAnyValues = true;
                internalValueResult.userName = this._userName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._auth = undefined;
                this._email = undefined;
                this._hostName = undefined;
                this._identityToken = undefined;
                this._password = undefined;
                this._registryToken = undefined;
                this._serverAddress = undefined;
                this._userName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._auth = value.auth;
                this._email = value.email;
                this._hostName = value.hostName;
                this._identityToken = value.identityToken;
                this._password = value.password;
                this._registryToken = value.registryToken;
                this._serverAddress = value.serverAddress;
                this._userName = value.userName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "auth", {
        get: function () {
            return this.getStringAttribute('auth');
        },
        set: function (value) {
            this._auth = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildAuthConfigOutputReference.prototype.resetAuth = function () {
        this._auth = undefined;
    };
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "authInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildAuthConfigOutputReference.prototype.resetEmail = function () {
        this._email = undefined;
    };
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "hostName", {
        get: function () {
            return this.getStringAttribute('host_name');
        },
        set: function (value) {
            this._hostName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "hostNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "identityToken", {
        get: function () {
            return this.getStringAttribute('identity_token');
        },
        set: function (value) {
            this._identityToken = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildAuthConfigOutputReference.prototype.resetIdentityToken = function () {
        this._identityToken = undefined;
    };
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "identityTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildAuthConfigOutputReference.prototype.resetPassword = function () {
        this._password = undefined;
    };
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "registryToken", {
        get: function () {
            return this.getStringAttribute('registry_token');
        },
        set: function (value) {
            this._registryToken = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildAuthConfigOutputReference.prototype.resetRegistryToken = function () {
        this._registryToken = undefined;
    };
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "registryTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registryToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "serverAddress", {
        get: function () {
            return this.getStringAttribute('server_address');
        },
        set: function (value) {
            this._serverAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildAuthConfigOutputReference.prototype.resetServerAddress = function () {
        this._serverAddress = undefined;
    };
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "serverAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "userName", {
        get: function () {
            return this.getStringAttribute('user_name');
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildAuthConfigOutputReference.prototype.resetUserName = function () {
        this._userName = undefined;
    };
    Object.defineProperty(ImageBuildAuthConfigOutputReference.prototype, "userNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    return ImageBuildAuthConfigOutputReference;
}(cdktf.ComplexObject));
exports.ImageBuildAuthConfigOutputReference = ImageBuildAuthConfigOutputReference;
var ImageBuildAuthConfigList = /** @class */ (function (_super) {
    __extends(ImageBuildAuthConfigList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ImageBuildAuthConfigList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ImageBuildAuthConfigList.prototype.get = function (index) {
        return new ImageBuildAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ImageBuildAuthConfigList;
}(cdktf.ComplexList));
exports.ImageBuildAuthConfigList = ImageBuildAuthConfigList;
function imageBuildSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        env: cdktf.stringToTerraform(struct.env),
        id: cdktf.stringToTerraform(struct.id),
        src: cdktf.stringToTerraform(struct.src),
    };
}
function imageBuildSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        env: {
            value: cdktf.stringToHclTerraform(struct.env),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        src: {
            value: cdktf.stringToHclTerraform(struct.src),
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
var ImageBuildSecretsOutputReference = /** @class */ (function (_super) {
    __extends(ImageBuildSecretsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ImageBuildSecretsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ImageBuildSecretsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._env !== undefined) {
                hasAnyValues = true;
                internalValueResult.env = this._env;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._src !== undefined) {
                hasAnyValues = true;
                internalValueResult.src = this._src;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._env = undefined;
                this._id = undefined;
                this._src = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._env = value.env;
                this._id = value.id;
                this._src = value.src;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildSecretsOutputReference.prototype, "env", {
        get: function () {
            return this.getStringAttribute('env');
        },
        set: function (value) {
            this._env = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildSecretsOutputReference.prototype.resetEnv = function () {
        this._env = undefined;
    };
    Object.defineProperty(ImageBuildSecretsOutputReference.prototype, "envInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._env;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildSecretsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildSecretsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildSecretsOutputReference.prototype, "src", {
        get: function () {
            return this.getStringAttribute('src');
        },
        set: function (value) {
            this._src = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildSecretsOutputReference.prototype.resetSrc = function () {
        this._src = undefined;
    };
    Object.defineProperty(ImageBuildSecretsOutputReference.prototype, "srcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._src;
        },
        enumerable: false,
        configurable: true
    });
    return ImageBuildSecretsOutputReference;
}(cdktf.ComplexObject));
exports.ImageBuildSecretsOutputReference = ImageBuildSecretsOutputReference;
var ImageBuildSecretsList = /** @class */ (function (_super) {
    __extends(ImageBuildSecretsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ImageBuildSecretsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ImageBuildSecretsList.prototype.get = function (index) {
        return new ImageBuildSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ImageBuildSecretsList;
}(cdktf.ComplexList));
exports.ImageBuildSecretsList = ImageBuildSecretsList;
function imageBuildUlimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hard: cdktf.numberToTerraform(struct.hard),
        name: cdktf.stringToTerraform(struct.name),
        soft: cdktf.numberToTerraform(struct.soft),
    };
}
function imageBuildUlimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        hard: {
            value: cdktf.numberToHclTerraform(struct.hard),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        soft: {
            value: cdktf.numberToHclTerraform(struct.soft),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ImageBuildUlimitOutputReference = /** @class */ (function (_super) {
    __extends(ImageBuildUlimitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ImageBuildUlimitOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ImageBuildUlimitOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._hard !== undefined) {
                hasAnyValues = true;
                internalValueResult.hard = this._hard;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._soft !== undefined) {
                hasAnyValues = true;
                internalValueResult.soft = this._soft;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._hard = undefined;
                this._name = undefined;
                this._soft = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._hard = value.hard;
                this._name = value.name;
                this._soft = value.soft;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildUlimitOutputReference.prototype, "hard", {
        get: function () {
            return this.getNumberAttribute('hard');
        },
        set: function (value) {
            this._hard = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildUlimitOutputReference.prototype, "hardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildUlimitOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildUlimitOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildUlimitOutputReference.prototype, "soft", {
        get: function () {
            return this.getNumberAttribute('soft');
        },
        set: function (value) {
            this._soft = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildUlimitOutputReference.prototype, "softInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._soft;
        },
        enumerable: false,
        configurable: true
    });
    return ImageBuildUlimitOutputReference;
}(cdktf.ComplexObject));
exports.ImageBuildUlimitOutputReference = ImageBuildUlimitOutputReference;
var ImageBuildUlimitList = /** @class */ (function (_super) {
    __extends(ImageBuildUlimitList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ImageBuildUlimitList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ImageBuildUlimitList.prototype.get = function (index) {
        return new ImageBuildUlimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ImageBuildUlimitList;
}(cdktf.ComplexList));
exports.ImageBuildUlimitList = ImageBuildUlimitList;
function imageBuildToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        additional_contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.additionalContexts),
        build_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct.buildArgs),
        build_id: cdktf.stringToTerraform(struct.buildId),
        build_log_file: cdktf.stringToTerraform(struct.buildLogFile),
        builder: cdktf.stringToTerraform(struct.builder),
        cache_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.cacheFrom),
        cache_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.cacheTo),
        cgroup_parent: cdktf.stringToTerraform(struct.cgroupParent),
        context: cdktf.stringToTerraform(struct.context),
        cpu_period: cdktf.numberToTerraform(struct.cpuPeriod),
        cpu_quota: cdktf.numberToTerraform(struct.cpuQuota),
        cpu_set_cpus: cdktf.stringToTerraform(struct.cpuSetCpus),
        cpu_set_mems: cdktf.stringToTerraform(struct.cpuSetMems),
        cpu_shares: cdktf.numberToTerraform(struct.cpuShares),
        dockerfile: cdktf.stringToTerraform(struct.dockerfile),
        extra_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.extraHosts),
        force_remove: cdktf.booleanToTerraform(struct.forceRemove),
        isolation: cdktf.stringToTerraform(struct.isolation),
        label: cdktf.hashMapper(cdktf.stringToTerraform)(struct.label),
        labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct.labels),
        memory: cdktf.numberToTerraform(struct.memory),
        memory_swap: cdktf.numberToTerraform(struct.memorySwap),
        network_mode: cdktf.stringToTerraform(struct.networkMode),
        no_cache: cdktf.booleanToTerraform(struct.noCache),
        platform: cdktf.stringToTerraform(struct.platform),
        pull_parent: cdktf.booleanToTerraform(struct.pullParent),
        remote_context: cdktf.stringToTerraform(struct.remoteContext),
        remove: cdktf.booleanToTerraform(struct.remove),
        security_opt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityOpt),
        session_id: cdktf.stringToTerraform(struct.sessionId),
        shm_size: cdktf.numberToTerraform(struct.shmSize),
        squash: cdktf.booleanToTerraform(struct.squash),
        suppress_output: cdktf.booleanToTerraform(struct.suppressOutput),
        tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tag),
        target: cdktf.stringToTerraform(struct.target),
        use_legacy_builder: cdktf.booleanToTerraform(struct.useLegacyBuilder),
        version: cdktf.stringToTerraform(struct.version),
        auth_config: cdktf.listMapper(imageBuildAuthConfigToTerraform, true)(struct.authConfig),
        secrets: cdktf.listMapper(imageBuildSecretsToTerraform, true)(struct.secrets),
        ulimit: cdktf.listMapper(imageBuildUlimitToTerraform, true)(struct.ulimit),
    };
}
function imageBuildToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        additional_contexts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.additionalContexts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        build_args: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.buildArgs),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        build_id: {
            value: cdktf.stringToHclTerraform(struct.buildId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        build_log_file: {
            value: cdktf.stringToHclTerraform(struct.buildLogFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        builder: {
            value: cdktf.stringToHclTerraform(struct.builder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_from: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.cacheFrom),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cache_to: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.cacheTo),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cgroup_parent: {
            value: cdktf.stringToHclTerraform(struct.cgroupParent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        context: {
            value: cdktf.stringToHclTerraform(struct.context),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_period: {
            value: cdktf.numberToHclTerraform(struct.cpuPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cpu_quota: {
            value: cdktf.numberToHclTerraform(struct.cpuQuota),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cpu_set_cpus: {
            value: cdktf.stringToHclTerraform(struct.cpuSetCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_set_mems: {
            value: cdktf.stringToHclTerraform(struct.cpuSetMems),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_shares: {
            value: cdktf.numberToHclTerraform(struct.cpuShares),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dockerfile: {
            value: cdktf.stringToHclTerraform(struct.dockerfile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        extra_hosts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.extraHosts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        force_remove: {
            value: cdktf.booleanToHclTerraform(struct.forceRemove),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        isolation: {
            value: cdktf.stringToHclTerraform(struct.isolation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.label),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        labels: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.labels),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        memory: {
            value: cdktf.numberToHclTerraform(struct.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_swap: {
            value: cdktf.numberToHclTerraform(struct.memorySwap),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_mode: {
            value: cdktf.stringToHclTerraform(struct.networkMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        no_cache: {
            value: cdktf.booleanToHclTerraform(struct.noCache),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        platform: {
            value: cdktf.stringToHclTerraform(struct.platform),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pull_parent: {
            value: cdktf.booleanToHclTerraform(struct.pullParent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remote_context: {
            value: cdktf.stringToHclTerraform(struct.remoteContext),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        remove: {
            value: cdktf.booleanToHclTerraform(struct.remove),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        security_opt: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.securityOpt),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        session_id: {
            value: cdktf.stringToHclTerraform(struct.sessionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shm_size: {
            value: cdktf.numberToHclTerraform(struct.shmSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        squash: {
            value: cdktf.booleanToHclTerraform(struct.squash),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        suppress_output: {
            value: cdktf.booleanToHclTerraform(struct.suppressOutput),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        tag: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tag),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_legacy_builder: {
            value: cdktf.booleanToHclTerraform(struct.useLegacyBuilder),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_config: {
            value: cdktf.listMapperHcl(imageBuildAuthConfigToHclTerraform, true)(struct.authConfig),
            isBlock: true,
            type: "list",
            storageClassType: "ImageBuildAuthConfigList",
        },
        secrets: {
            value: cdktf.listMapperHcl(imageBuildSecretsToHclTerraform, true)(struct.secrets),
            isBlock: true,
            type: "list",
            storageClassType: "ImageBuildSecretsList",
        },
        ulimit: {
            value: cdktf.listMapperHcl(imageBuildUlimitToHclTerraform, true)(struct.ulimit),
            isBlock: true,
            type: "list",
            storageClassType: "ImageBuildUlimitList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ImageBuildOutputReference = /** @class */ (function (_super) {
    __extends(ImageBuildOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ImageBuildOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // auth_config - computed: false, optional: true, required: false
        _this._authConfig = new ImageBuildAuthConfigList(_this, "auth_config", false);
        // secrets - computed: false, optional: true, required: false
        _this._secrets = new ImageBuildSecretsList(_this, "secrets", false);
        // ulimit - computed: false, optional: true, required: false
        _this._ulimit = new ImageBuildUlimitList(_this, "ulimit", false);
        return _this;
    }
    Object.defineProperty(ImageBuildOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._additionalContexts !== undefined) {
                hasAnyValues = true;
                internalValueResult.additionalContexts = this._additionalContexts;
            }
            if (this._buildArgs !== undefined) {
                hasAnyValues = true;
                internalValueResult.buildArgs = this._buildArgs;
            }
            if (this._buildId !== undefined) {
                hasAnyValues = true;
                internalValueResult.buildId = this._buildId;
            }
            if (this._buildLogFile !== undefined) {
                hasAnyValues = true;
                internalValueResult.buildLogFile = this._buildLogFile;
            }
            if (this._builder !== undefined) {
                hasAnyValues = true;
                internalValueResult.builder = this._builder;
            }
            if (this._cacheFrom !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheFrom = this._cacheFrom;
            }
            if (this._cacheTo !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheTo = this._cacheTo;
            }
            if (this._cgroupParent !== undefined) {
                hasAnyValues = true;
                internalValueResult.cgroupParent = this._cgroupParent;
            }
            if (this._context !== undefined) {
                hasAnyValues = true;
                internalValueResult.context = this._context;
            }
            if (this._cpuPeriod !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuPeriod = this._cpuPeriod;
            }
            if (this._cpuQuota !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuQuota = this._cpuQuota;
            }
            if (this._cpuSetCpus !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuSetCpus = this._cpuSetCpus;
            }
            if (this._cpuSetMems !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuSetMems = this._cpuSetMems;
            }
            if (this._cpuShares !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuShares = this._cpuShares;
            }
            if (this._dockerfile !== undefined) {
                hasAnyValues = true;
                internalValueResult.dockerfile = this._dockerfile;
            }
            if (this._extraHosts !== undefined) {
                hasAnyValues = true;
                internalValueResult.extraHosts = this._extraHosts;
            }
            if (this._forceRemove !== undefined) {
                hasAnyValues = true;
                internalValueResult.forceRemove = this._forceRemove;
            }
            if (this._isolation !== undefined) {
                hasAnyValues = true;
                internalValueResult.isolation = this._isolation;
            }
            if (this._label !== undefined) {
                hasAnyValues = true;
                internalValueResult.label = this._label;
            }
            if (this._labels !== undefined) {
                hasAnyValues = true;
                internalValueResult.labels = this._labels;
            }
            if (this._memory !== undefined) {
                hasAnyValues = true;
                internalValueResult.memory = this._memory;
            }
            if (this._memorySwap !== undefined) {
                hasAnyValues = true;
                internalValueResult.memorySwap = this._memorySwap;
            }
            if (this._networkMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.networkMode = this._networkMode;
            }
            if (this._noCache !== undefined) {
                hasAnyValues = true;
                internalValueResult.noCache = this._noCache;
            }
            if (this._platform !== undefined) {
                hasAnyValues = true;
                internalValueResult.platform = this._platform;
            }
            if (this._pullParent !== undefined) {
                hasAnyValues = true;
                internalValueResult.pullParent = this._pullParent;
            }
            if (this._remoteContext !== undefined) {
                hasAnyValues = true;
                internalValueResult.remoteContext = this._remoteContext;
            }
            if (this._remove !== undefined) {
                hasAnyValues = true;
                internalValueResult.remove = this._remove;
            }
            if (this._securityOpt !== undefined) {
                hasAnyValues = true;
                internalValueResult.securityOpt = this._securityOpt;
            }
            if (this._sessionId !== undefined) {
                hasAnyValues = true;
                internalValueResult.sessionId = this._sessionId;
            }
            if (this._shmSize !== undefined) {
                hasAnyValues = true;
                internalValueResult.shmSize = this._shmSize;
            }
            if (this._squash !== undefined) {
                hasAnyValues = true;
                internalValueResult.squash = this._squash;
            }
            if (this._suppressOutput !== undefined) {
                hasAnyValues = true;
                internalValueResult.suppressOutput = this._suppressOutput;
            }
            if (this._tag !== undefined) {
                hasAnyValues = true;
                internalValueResult.tag = this._tag;
            }
            if (this._target !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = this._target;
            }
            if (this._useLegacyBuilder !== undefined) {
                hasAnyValues = true;
                internalValueResult.useLegacyBuilder = this._useLegacyBuilder;
            }
            if (this._version !== undefined) {
                hasAnyValues = true;
                internalValueResult.version = this._version;
            }
            if (((_a = this._authConfig) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.authConfig = (_b = this._authConfig) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._secrets) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.secrets = (_d = this._secrets) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._ulimit) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ulimit = (_f = this._ulimit) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._additionalContexts = undefined;
                this._buildArgs = undefined;
                this._buildId = undefined;
                this._buildLogFile = undefined;
                this._builder = undefined;
                this._cacheFrom = undefined;
                this._cacheTo = undefined;
                this._cgroupParent = undefined;
                this._context = undefined;
                this._cpuPeriod = undefined;
                this._cpuQuota = undefined;
                this._cpuSetCpus = undefined;
                this._cpuSetMems = undefined;
                this._cpuShares = undefined;
                this._dockerfile = undefined;
                this._extraHosts = undefined;
                this._forceRemove = undefined;
                this._isolation = undefined;
                this._label = undefined;
                this._labels = undefined;
                this._memory = undefined;
                this._memorySwap = undefined;
                this._networkMode = undefined;
                this._noCache = undefined;
                this._platform = undefined;
                this._pullParent = undefined;
                this._remoteContext = undefined;
                this._remove = undefined;
                this._securityOpt = undefined;
                this._sessionId = undefined;
                this._shmSize = undefined;
                this._squash = undefined;
                this._suppressOutput = undefined;
                this._tag = undefined;
                this._target = undefined;
                this._useLegacyBuilder = undefined;
                this._version = undefined;
                this._authConfig.internalValue = undefined;
                this._secrets.internalValue = undefined;
                this._ulimit.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._additionalContexts = value.additionalContexts;
                this._buildArgs = value.buildArgs;
                this._buildId = value.buildId;
                this._buildLogFile = value.buildLogFile;
                this._builder = value.builder;
                this._cacheFrom = value.cacheFrom;
                this._cacheTo = value.cacheTo;
                this._cgroupParent = value.cgroupParent;
                this._context = value.context;
                this._cpuPeriod = value.cpuPeriod;
                this._cpuQuota = value.cpuQuota;
                this._cpuSetCpus = value.cpuSetCpus;
                this._cpuSetMems = value.cpuSetMems;
                this._cpuShares = value.cpuShares;
                this._dockerfile = value.dockerfile;
                this._extraHosts = value.extraHosts;
                this._forceRemove = value.forceRemove;
                this._isolation = value.isolation;
                this._label = value.label;
                this._labels = value.labels;
                this._memory = value.memory;
                this._memorySwap = value.memorySwap;
                this._networkMode = value.networkMode;
                this._noCache = value.noCache;
                this._platform = value.platform;
                this._pullParent = value.pullParent;
                this._remoteContext = value.remoteContext;
                this._remove = value.remove;
                this._securityOpt = value.securityOpt;
                this._sessionId = value.sessionId;
                this._shmSize = value.shmSize;
                this._squash = value.squash;
                this._suppressOutput = value.suppressOutput;
                this._tag = value.tag;
                this._target = value.target;
                this._useLegacyBuilder = value.useLegacyBuilder;
                this._version = value.version;
                this._authConfig.internalValue = value.authConfig;
                this._secrets.internalValue = value.secrets;
                this._ulimit.internalValue = value.ulimit;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "additionalContexts", {
        get: function () {
            return this.getListAttribute('additional_contexts');
        },
        set: function (value) {
            this._additionalContexts = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetAdditionalContexts = function () {
        this._additionalContexts = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "additionalContextsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._additionalContexts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "buildArgs", {
        get: function () {
            return this.getStringMapAttribute('build_args');
        },
        set: function (value) {
            this._buildArgs = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetBuildArgs = function () {
        this._buildArgs = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "buildArgsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildArgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "buildId", {
        get: function () {
            return this.getStringAttribute('build_id');
        },
        set: function (value) {
            this._buildId = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetBuildId = function () {
        this._buildId = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "buildIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "buildLogFile", {
        get: function () {
            return this.getStringAttribute('build_log_file');
        },
        set: function (value) {
            this._buildLogFile = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetBuildLogFile = function () {
        this._buildLogFile = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "buildLogFileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildLogFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "builder", {
        get: function () {
            return this.getStringAttribute('builder');
        },
        set: function (value) {
            this._builder = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetBuilder = function () {
        this._builder = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "builderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._builder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "cacheFrom", {
        get: function () {
            return this.getListAttribute('cache_from');
        },
        set: function (value) {
            this._cacheFrom = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetCacheFrom = function () {
        this._cacheFrom = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "cacheFromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheFrom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "cacheTo", {
        get: function () {
            return this.getListAttribute('cache_to');
        },
        set: function (value) {
            this._cacheTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetCacheTo = function () {
        this._cacheTo = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "cacheToInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheTo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "cgroupParent", {
        get: function () {
            return this.getStringAttribute('cgroup_parent');
        },
        set: function (value) {
            this._cgroupParent = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetCgroupParent = function () {
        this._cgroupParent = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "cgroupParentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cgroupParent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "context", {
        get: function () {
            return this.getStringAttribute('context');
        },
        set: function (value) {
            this._context = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "contextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuPeriod", {
        get: function () {
            return this.getNumberAttribute('cpu_period');
        },
        set: function (value) {
            this._cpuPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetCpuPeriod = function () {
        this._cpuPeriod = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuQuota", {
        get: function () {
            return this.getNumberAttribute('cpu_quota');
        },
        set: function (value) {
            this._cpuQuota = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetCpuQuota = function () {
        this._cpuQuota = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuQuotaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuQuota;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuSetCpus", {
        get: function () {
            return this.getStringAttribute('cpu_set_cpus');
        },
        set: function (value) {
            this._cpuSetCpus = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetCpuSetCpus = function () {
        this._cpuSetCpus = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuSetCpusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuSetCpus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuSetMems", {
        get: function () {
            return this.getStringAttribute('cpu_set_mems');
        },
        set: function (value) {
            this._cpuSetMems = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetCpuSetMems = function () {
        this._cpuSetMems = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuSetMemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuSetMems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuShares", {
        get: function () {
            return this.getNumberAttribute('cpu_shares');
        },
        set: function (value) {
            this._cpuShares = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetCpuShares = function () {
        this._cpuShares = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "cpuSharesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuShares;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "dockerfile", {
        get: function () {
            return this.getStringAttribute('dockerfile');
        },
        set: function (value) {
            this._dockerfile = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetDockerfile = function () {
        this._dockerfile = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "dockerfileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dockerfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "extraHosts", {
        get: function () {
            return this.getListAttribute('extra_hosts');
        },
        set: function (value) {
            this._extraHosts = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetExtraHosts = function () {
        this._extraHosts = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "extraHostsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extraHosts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "forceRemove", {
        get: function () {
            return this.getBooleanAttribute('force_remove');
        },
        set: function (value) {
            this._forceRemove = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetForceRemove = function () {
        this._forceRemove = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "forceRemoveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceRemove;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "isolation", {
        get: function () {
            return this.getStringAttribute('isolation');
        },
        set: function (value) {
            this._isolation = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetIsolation = function () {
        this._isolation = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "isolationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isolation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "label", {
        get: function () {
            return this.getStringMapAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetLabel = function () {
        this._label = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "labels", {
        get: function () {
            return this.getStringMapAttribute('labels');
        },
        set: function (value) {
            this._labels = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetLabels = function () {
        this._labels = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "memory", {
        get: function () {
            return this.getNumberAttribute('memory');
        },
        set: function (value) {
            this._memory = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetMemory = function () {
        this._memory = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "memoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "memorySwap", {
        get: function () {
            return this.getNumberAttribute('memory_swap');
        },
        set: function (value) {
            this._memorySwap = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetMemorySwap = function () {
        this._memorySwap = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "memorySwapInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memorySwap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "networkMode", {
        get: function () {
            return this.getStringAttribute('network_mode');
        },
        set: function (value) {
            this._networkMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetNetworkMode = function () {
        this._networkMode = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "networkModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "noCache", {
        get: function () {
            return this.getBooleanAttribute('no_cache');
        },
        set: function (value) {
            this._noCache = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetNoCache = function () {
        this._noCache = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "noCacheInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noCache;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "platform", {
        get: function () {
            return this.getStringAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetPlatform = function () {
        this._platform = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "pullParent", {
        get: function () {
            return this.getBooleanAttribute('pull_parent');
        },
        set: function (value) {
            this._pullParent = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetPullParent = function () {
        this._pullParent = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "pullParentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pullParent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "remoteContext", {
        get: function () {
            return this.getStringAttribute('remote_context');
        },
        set: function (value) {
            this._remoteContext = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetRemoteContext = function () {
        this._remoteContext = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "remoteContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._remoteContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "remove", {
        get: function () {
            return this.getBooleanAttribute('remove');
        },
        set: function (value) {
            this._remove = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetRemove = function () {
        this._remove = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "removeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._remove;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "securityOpt", {
        get: function () {
            return this.getListAttribute('security_opt');
        },
        set: function (value) {
            this._securityOpt = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetSecurityOpt = function () {
        this._securityOpt = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "securityOptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityOpt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "sessionId", {
        get: function () {
            return this.getStringAttribute('session_id');
        },
        set: function (value) {
            this._sessionId = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetSessionId = function () {
        this._sessionId = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "sessionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "shmSize", {
        get: function () {
            return this.getNumberAttribute('shm_size');
        },
        set: function (value) {
            this._shmSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetShmSize = function () {
        this._shmSize = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "shmSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shmSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "squash", {
        get: function () {
            return this.getBooleanAttribute('squash');
        },
        set: function (value) {
            this._squash = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetSquash = function () {
        this._squash = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "squashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._squash;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "suppressOutput", {
        get: function () {
            return this.getBooleanAttribute('suppress_output');
        },
        set: function (value) {
            this._suppressOutput = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetSuppressOutput = function () {
        this._suppressOutput = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "suppressOutputInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suppressOutput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "tag", {
        get: function () {
            return this.getListAttribute('tag');
        },
        set: function (value) {
            this._tag = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetTag = function () {
        this._tag = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "tagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetTarget = function () {
        this._target = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "useLegacyBuilder", {
        get: function () {
            return this.getBooleanAttribute('use_legacy_builder');
        },
        set: function (value) {
            this._useLegacyBuilder = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetUseLegacyBuilder = function () {
        this._useLegacyBuilder = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "useLegacyBuilderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._useLegacyBuilder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "authConfig", {
        get: function () {
            return this._authConfig;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.putAuthConfig = function (value) {
        this._authConfig.internalValue = value;
    };
    ImageBuildOutputReference.prototype.resetAuthConfig = function () {
        this._authConfig.internalValue = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "authConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "secrets", {
        get: function () {
            return this._secrets;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.putSecrets = function (value) {
        this._secrets.internalValue = value;
    };
    ImageBuildOutputReference.prototype.resetSecrets = function () {
        this._secrets.internalValue = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "secretsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secrets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageBuildOutputReference.prototype, "ulimit", {
        get: function () {
            return this._ulimit;
        },
        enumerable: false,
        configurable: true
    });
    ImageBuildOutputReference.prototype.putUlimit = function (value) {
        this._ulimit.internalValue = value;
    };
    ImageBuildOutputReference.prototype.resetUlimit = function () {
        this._ulimit.internalValue = undefined;
    };
    Object.defineProperty(ImageBuildOutputReference.prototype, "ulimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ulimit.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ImageBuildOutputReference;
}(cdktf.ComplexObject));
exports.ImageBuildOutputReference = ImageBuildOutputReference;
function imageTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
function imageTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        create: {
            value: cdktf.stringToHclTerraform(struct.create),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update: {
            value: cdktf.stringToHclTerraform(struct.update),
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
var ImageTimeoutsOutputReference = /** @class */ (function (_super) {
    __extends(ImageTimeoutsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ImageTimeoutsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ImageTimeoutsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._create !== undefined) {
                hasAnyValues = true;
                internalValueResult.create = this._create;
            }
            if (this._delete !== undefined) {
                hasAnyValues = true;
                internalValueResult.delete = this._delete;
            }
            if (this._update !== undefined) {
                hasAnyValues = true;
                internalValueResult.update = this._update;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._create = undefined;
                this._delete = undefined;
                this._update = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._create = value.create;
                this._delete = value.delete;
                this._update = value.update;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageTimeoutsOutputReference.prototype, "create", {
        get: function () {
            return this.getStringAttribute('create');
        },
        set: function (value) {
            this._create = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageTimeoutsOutputReference.prototype.resetCreate = function () {
        this._create = undefined;
    };
    Object.defineProperty(ImageTimeoutsOutputReference.prototype, "createInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._create;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageTimeoutsOutputReference.prototype, "delete", {
        get: function () {
            return this.getStringAttribute('delete');
        },
        set: function (value) {
            this._delete = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageTimeoutsOutputReference.prototype.resetDelete = function () {
        this._delete = undefined;
    };
    Object.defineProperty(ImageTimeoutsOutputReference.prototype, "deleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageTimeoutsOutputReference.prototype, "update", {
        get: function () {
            return this.getStringAttribute('update');
        },
        set: function (value) {
            this._update = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageTimeoutsOutputReference.prototype.resetUpdate = function () {
        this._update = undefined;
    };
    Object.defineProperty(ImageTimeoutsOutputReference.prototype, "updateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._update;
        },
        enumerable: false,
        configurable: true
    });
    return ImageTimeoutsOutputReference;
}(cdktf.ComplexObject));
exports.ImageTimeoutsOutputReference = ImageTimeoutsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/image docker_image}
*/
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/image docker_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImageConfig
    */
    function Image(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_image',
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
        // build - computed: false, optional: true, required: false
        _this._build = new ImageBuildOutputReference(_this, "build");
        // timeouts - computed: false, optional: true, required: false
        _this._timeouts = new ImageTimeoutsOutputReference(_this, "timeouts");
        _this._forceRemove = config.forceRemove;
        _this._keepLocally = config.keepLocally;
        _this._name = config.name;
        _this._platform = config.platform;
        _this._pullTriggers = config.pullTriggers;
        _this._triggers = config.triggers;
        _this._build.internalValue = config.buildAttribute;
        _this._timeouts.internalValue = config.timeouts;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Image to import
    * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Image to import is found
    */
    Image.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_image", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Image.prototype, "forceRemove", {
        get: function () {
            return this.getBooleanAttribute('force_remove');
        },
        set: function (value) {
            this._forceRemove = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetForceRemove = function () {
        this._forceRemove = undefined;
    };
    Object.defineProperty(Image.prototype, "forceRemoveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceRemove;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "imageId", {
        // image_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "keepLocally", {
        get: function () {
            return this.getBooleanAttribute('keep_locally');
        },
        set: function (value) {
            this._keepLocally = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetKeepLocally = function () {
        this._keepLocally = undefined;
    };
    Object.defineProperty(Image.prototype, "keepLocallyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keepLocally;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "platform", {
        get: function () {
            return this.getStringAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetPlatform = function () {
        this._platform = undefined;
    };
    Object.defineProperty(Image.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "pullTriggers", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('pull_triggers'));
        },
        set: function (value) {
            this._pullTriggers = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetPullTriggers = function () {
        this._pullTriggers = undefined;
    };
    Object.defineProperty(Image.prototype, "pullTriggersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pullTriggers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "repoDigest", {
        // repo_digest - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_digest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "triggers", {
        get: function () {
            return this.getStringMapAttribute('triggers');
        },
        set: function (value) {
            this._triggers = value;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.resetTriggers = function () {
        this._triggers = undefined;
    };
    Object.defineProperty(Image.prototype, "triggersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._triggers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "buildAttribute", {
        get: function () {
            return this._build;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.putBuildAttribute = function (value) {
        this._build.internalValue = value;
    };
    Image.prototype.resetBuildAttribute = function () {
        this._build.internalValue = undefined;
    };
    Object.defineProperty(Image.prototype, "buildAttributeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._build.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "timeouts", {
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.putTimeouts = function (value) {
        this._timeouts.internalValue = value;
    };
    Image.prototype.resetTimeouts = function () {
        this._timeouts.internalValue = undefined;
    };
    Object.defineProperty(Image.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Image.prototype.synthesizeAttributes = function () {
        return {
            force_remove: cdktf.booleanToTerraform(this._forceRemove),
            keep_locally: cdktf.booleanToTerraform(this._keepLocally),
            name: cdktf.stringToTerraform(this._name),
            platform: cdktf.stringToTerraform(this._platform),
            pull_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullTriggers),
            triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
            build: imageBuildToTerraform(this._build.internalValue),
            timeouts: imageTimeoutsToTerraform(this._timeouts.internalValue),
        };
    };
    Image.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            force_remove: {
                value: cdktf.booleanToHclTerraform(this._forceRemove),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            keep_locally: {
                value: cdktf.booleanToHclTerraform(this._keepLocally),
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
            platform: {
                value: cdktf.stringToHclTerraform(this._platform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pull_triggers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullTriggers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            triggers: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            build: {
                value: imageBuildToHclTerraform(this._build.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ImageBuildList",
            },
            timeouts: {
                value: imageTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ImageTimeouts",
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
    Image.tfResourceType = "docker_image";
    return Image;
}(cdktf.TerraformResource));
exports.Image = Image;
