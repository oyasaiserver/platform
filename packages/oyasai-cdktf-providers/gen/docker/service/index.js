"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service
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
exports.Service = exports.ServiceUpdateConfigOutputReference = exports.ServiceTaskSpecOutputReference = exports.ServiceTaskSpecRestartPolicyOutputReference = exports.ServiceTaskSpecResourcesOutputReference = exports.ServiceTaskSpecResourcesReservationOutputReference = exports.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference = exports.ServiceTaskSpecResourcesLimitsOutputReference = exports.ServiceTaskSpecPlacementOutputReference = exports.ServiceTaskSpecPlacementPlatformsList = exports.ServiceTaskSpecPlacementPlatformsOutputReference = exports.ServiceTaskSpecNetworksAdvancedList = exports.ServiceTaskSpecNetworksAdvancedOutputReference = exports.ServiceTaskSpecLogDriverOutputReference = exports.ServiceTaskSpecContainerSpecOutputReference = exports.ServiceTaskSpecContainerSpecSecretsList = exports.ServiceTaskSpecContainerSpecSecretsOutputReference = exports.ServiceTaskSpecContainerSpecPrivilegesOutputReference = exports.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference = exports.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference = exports.ServiceTaskSpecContainerSpecMountsList = exports.ServiceTaskSpecContainerSpecMountsOutputReference = exports.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference = exports.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList = exports.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference = exports.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference = exports.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference = exports.ServiceTaskSpecContainerSpecLabelsList = exports.ServiceTaskSpecContainerSpecLabelsOutputReference = exports.ServiceTaskSpecContainerSpecHostsList = exports.ServiceTaskSpecContainerSpecHostsOutputReference = exports.ServiceTaskSpecContainerSpecHealthcheckOutputReference = exports.ServiceTaskSpecContainerSpecDnsConfigOutputReference = exports.ServiceTaskSpecContainerSpecConfigsList = exports.ServiceTaskSpecContainerSpecConfigsOutputReference = exports.ServiceRollbackConfigOutputReference = exports.ServiceModeOutputReference = exports.ServiceModeReplicatedOutputReference = exports.ServiceLabelsList = exports.ServiceLabelsOutputReference = exports.ServiceEndpointSpecOutputReference = exports.ServiceEndpointSpecPortsList = exports.ServiceEndpointSpecPortsOutputReference = exports.ServiceConvergeConfigOutputReference = exports.ServiceAuthOutputReference = void 0;
exports.serviceAuthToTerraform = serviceAuthToTerraform;
exports.serviceAuthToHclTerraform = serviceAuthToHclTerraform;
exports.serviceConvergeConfigToTerraform = serviceConvergeConfigToTerraform;
exports.serviceConvergeConfigToHclTerraform = serviceConvergeConfigToHclTerraform;
exports.serviceEndpointSpecPortsToTerraform = serviceEndpointSpecPortsToTerraform;
exports.serviceEndpointSpecPortsToHclTerraform = serviceEndpointSpecPortsToHclTerraform;
exports.serviceEndpointSpecToTerraform = serviceEndpointSpecToTerraform;
exports.serviceEndpointSpecToHclTerraform = serviceEndpointSpecToHclTerraform;
exports.serviceLabelsToTerraform = serviceLabelsToTerraform;
exports.serviceLabelsToHclTerraform = serviceLabelsToHclTerraform;
exports.serviceModeReplicatedToTerraform = serviceModeReplicatedToTerraform;
exports.serviceModeReplicatedToHclTerraform = serviceModeReplicatedToHclTerraform;
exports.serviceModeToTerraform = serviceModeToTerraform;
exports.serviceModeToHclTerraform = serviceModeToHclTerraform;
exports.serviceRollbackConfigToTerraform = serviceRollbackConfigToTerraform;
exports.serviceRollbackConfigToHclTerraform = serviceRollbackConfigToHclTerraform;
exports.serviceTaskSpecContainerSpecConfigsToTerraform = serviceTaskSpecContainerSpecConfigsToTerraform;
exports.serviceTaskSpecContainerSpecConfigsToHclTerraform = serviceTaskSpecContainerSpecConfigsToHclTerraform;
exports.serviceTaskSpecContainerSpecDnsConfigToTerraform = serviceTaskSpecContainerSpecDnsConfigToTerraform;
exports.serviceTaskSpecContainerSpecDnsConfigToHclTerraform = serviceTaskSpecContainerSpecDnsConfigToHclTerraform;
exports.serviceTaskSpecContainerSpecHealthcheckToTerraform = serviceTaskSpecContainerSpecHealthcheckToTerraform;
exports.serviceTaskSpecContainerSpecHealthcheckToHclTerraform = serviceTaskSpecContainerSpecHealthcheckToHclTerraform;
exports.serviceTaskSpecContainerSpecHostsToTerraform = serviceTaskSpecContainerSpecHostsToTerraform;
exports.serviceTaskSpecContainerSpecHostsToHclTerraform = serviceTaskSpecContainerSpecHostsToHclTerraform;
exports.serviceTaskSpecContainerSpecLabelsToTerraform = serviceTaskSpecContainerSpecLabelsToTerraform;
exports.serviceTaskSpecContainerSpecLabelsToHclTerraform = serviceTaskSpecContainerSpecLabelsToHclTerraform;
exports.serviceTaskSpecContainerSpecMountsBindOptionsToTerraform = serviceTaskSpecContainerSpecMountsBindOptionsToTerraform;
exports.serviceTaskSpecContainerSpecMountsBindOptionsToHclTerraform = serviceTaskSpecContainerSpecMountsBindOptionsToHclTerraform;
exports.serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform = serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform;
exports.serviceTaskSpecContainerSpecMountsTmpfsOptionsToHclTerraform = serviceTaskSpecContainerSpecMountsTmpfsOptionsToHclTerraform;
exports.serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform = serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform;
exports.serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToHclTerraform = serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToHclTerraform;
exports.serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform = serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform;
exports.serviceTaskSpecContainerSpecMountsVolumeOptionsToHclTerraform = serviceTaskSpecContainerSpecMountsVolumeOptionsToHclTerraform;
exports.serviceTaskSpecContainerSpecMountsToTerraform = serviceTaskSpecContainerSpecMountsToTerraform;
exports.serviceTaskSpecContainerSpecMountsToHclTerraform = serviceTaskSpecContainerSpecMountsToHclTerraform;
exports.serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform = serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform;
exports.serviceTaskSpecContainerSpecPrivilegesCredentialSpecToHclTerraform = serviceTaskSpecContainerSpecPrivilegesCredentialSpecToHclTerraform;
exports.serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform = serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform;
exports.serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToHclTerraform = serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToHclTerraform;
exports.serviceTaskSpecContainerSpecPrivilegesToTerraform = serviceTaskSpecContainerSpecPrivilegesToTerraform;
exports.serviceTaskSpecContainerSpecPrivilegesToHclTerraform = serviceTaskSpecContainerSpecPrivilegesToHclTerraform;
exports.serviceTaskSpecContainerSpecSecretsToTerraform = serviceTaskSpecContainerSpecSecretsToTerraform;
exports.serviceTaskSpecContainerSpecSecretsToHclTerraform = serviceTaskSpecContainerSpecSecretsToHclTerraform;
exports.serviceTaskSpecContainerSpecToTerraform = serviceTaskSpecContainerSpecToTerraform;
exports.serviceTaskSpecContainerSpecToHclTerraform = serviceTaskSpecContainerSpecToHclTerraform;
exports.serviceTaskSpecLogDriverToTerraform = serviceTaskSpecLogDriverToTerraform;
exports.serviceTaskSpecLogDriverToHclTerraform = serviceTaskSpecLogDriverToHclTerraform;
exports.serviceTaskSpecNetworksAdvancedToTerraform = serviceTaskSpecNetworksAdvancedToTerraform;
exports.serviceTaskSpecNetworksAdvancedToHclTerraform = serviceTaskSpecNetworksAdvancedToHclTerraform;
exports.serviceTaskSpecPlacementPlatformsToTerraform = serviceTaskSpecPlacementPlatformsToTerraform;
exports.serviceTaskSpecPlacementPlatformsToHclTerraform = serviceTaskSpecPlacementPlatformsToHclTerraform;
exports.serviceTaskSpecPlacementToTerraform = serviceTaskSpecPlacementToTerraform;
exports.serviceTaskSpecPlacementToHclTerraform = serviceTaskSpecPlacementToHclTerraform;
exports.serviceTaskSpecResourcesLimitsToTerraform = serviceTaskSpecResourcesLimitsToTerraform;
exports.serviceTaskSpecResourcesLimitsToHclTerraform = serviceTaskSpecResourcesLimitsToHclTerraform;
exports.serviceTaskSpecResourcesReservationGenericResourcesToTerraform = serviceTaskSpecResourcesReservationGenericResourcesToTerraform;
exports.serviceTaskSpecResourcesReservationGenericResourcesToHclTerraform = serviceTaskSpecResourcesReservationGenericResourcesToHclTerraform;
exports.serviceTaskSpecResourcesReservationToTerraform = serviceTaskSpecResourcesReservationToTerraform;
exports.serviceTaskSpecResourcesReservationToHclTerraform = serviceTaskSpecResourcesReservationToHclTerraform;
exports.serviceTaskSpecResourcesToTerraform = serviceTaskSpecResourcesToTerraform;
exports.serviceTaskSpecResourcesToHclTerraform = serviceTaskSpecResourcesToHclTerraform;
exports.serviceTaskSpecRestartPolicyToTerraform = serviceTaskSpecRestartPolicyToTerraform;
exports.serviceTaskSpecRestartPolicyToHclTerraform = serviceTaskSpecRestartPolicyToHclTerraform;
exports.serviceTaskSpecToTerraform = serviceTaskSpecToTerraform;
exports.serviceTaskSpecToHclTerraform = serviceTaskSpecToHclTerraform;
exports.serviceUpdateConfigToTerraform = serviceUpdateConfigToTerraform;
exports.serviceUpdateConfigToHclTerraform = serviceUpdateConfigToHclTerraform;
var cdktf = require("cdktf");
function serviceAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        server_address: cdktf.stringToTerraform(struct.serverAddress),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function serviceAuthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
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
var ServiceAuthOutputReference = /** @class */ (function (_super) {
    __extends(ServiceAuthOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceAuthOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceAuthOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
            }
            if (this._serverAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.serverAddress = this._serverAddress;
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
                this._password = undefined;
                this._serverAddress = undefined;
                this._username = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._password = value.password;
                this._serverAddress = value.serverAddress;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceAuthOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceAuthOutputReference.prototype.resetPassword = function () {
        this._password = undefined;
    };
    Object.defineProperty(ServiceAuthOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceAuthOutputReference.prototype, "serverAddress", {
        get: function () {
            return this.getStringAttribute('server_address');
        },
        set: function (value) {
            this._serverAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceAuthOutputReference.prototype, "serverAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceAuthOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceAuthOutputReference.prototype.resetUsername = function () {
        this._username = undefined;
    };
    Object.defineProperty(ServiceAuthOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceAuthOutputReference;
}(cdktf.ComplexObject));
exports.ServiceAuthOutputReference = ServiceAuthOutputReference;
function serviceConvergeConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delay: cdktf.stringToTerraform(struct.delay),
        timeout: cdktf.stringToTerraform(struct.timeout),
    };
}
function serviceConvergeConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        delay: {
            value: cdktf.stringToHclTerraform(struct.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout: {
            value: cdktf.stringToHclTerraform(struct.timeout),
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
var ServiceConvergeConfigOutputReference = /** @class */ (function (_super) {
    __extends(ServiceConvergeConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceConvergeConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceConvergeConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._delay !== undefined) {
                hasAnyValues = true;
                internalValueResult.delay = this._delay;
            }
            if (this._timeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.timeout = this._timeout;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._delay = undefined;
                this._timeout = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._delay = value.delay;
                this._timeout = value.timeout;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceConvergeConfigOutputReference.prototype, "delay", {
        get: function () {
            return this.getStringAttribute('delay');
        },
        set: function (value) {
            this._delay = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceConvergeConfigOutputReference.prototype.resetDelay = function () {
        this._delay = undefined;
    };
    Object.defineProperty(ServiceConvergeConfigOutputReference.prototype, "delayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceConvergeConfigOutputReference.prototype, "timeout", {
        get: function () {
            return this.getStringAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceConvergeConfigOutputReference.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(ServiceConvergeConfigOutputReference.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceConvergeConfigOutputReference;
}(cdktf.ComplexObject));
exports.ServiceConvergeConfigOutputReference = ServiceConvergeConfigOutputReference;
function serviceEndpointSpecPortsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        protocol: cdktf.stringToTerraform(struct.protocol),
        publish_mode: cdktf.stringToTerraform(struct.publishMode),
        published_port: cdktf.numberToTerraform(struct.publishedPort),
        target_port: cdktf.numberToTerraform(struct.targetPort),
    };
}
function serviceEndpointSpecPortsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        publish_mode: {
            value: cdktf.stringToHclTerraform(struct.publishMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        published_port: {
            value: cdktf.numberToHclTerraform(struct.publishedPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_port: {
            value: cdktf.numberToHclTerraform(struct.targetPort),
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
var ServiceEndpointSpecPortsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceEndpointSpecPortsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceEndpointSpecPortsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._protocol !== undefined) {
                hasAnyValues = true;
                internalValueResult.protocol = this._protocol;
            }
            if (this._publishMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.publishMode = this._publishMode;
            }
            if (this._publishedPort !== undefined) {
                hasAnyValues = true;
                internalValueResult.publishedPort = this._publishedPort;
            }
            if (this._targetPort !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetPort = this._targetPort;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._protocol = undefined;
                this._publishMode = undefined;
                this._publishedPort = undefined;
                this._targetPort = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._protocol = value.protocol;
                this._publishMode = value.publishMode;
                this._publishedPort = value.publishedPort;
                this._targetPort = value.targetPort;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceEndpointSpecPortsOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceEndpointSpecPortsOutputReference.prototype.resetProtocol = function () {
        this._protocol = undefined;
    };
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "publishMode", {
        get: function () {
            return this.getStringAttribute('publish_mode');
        },
        set: function (value) {
            this._publishMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceEndpointSpecPortsOutputReference.prototype.resetPublishMode = function () {
        this._publishMode = undefined;
    };
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "publishModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publishMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "publishedPort", {
        get: function () {
            return this.getNumberAttribute('published_port');
        },
        set: function (value) {
            this._publishedPort = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceEndpointSpecPortsOutputReference.prototype.resetPublishedPort = function () {
        this._publishedPort = undefined;
    };
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "publishedPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publishedPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "targetPort", {
        get: function () {
            return this.getNumberAttribute('target_port');
        },
        set: function (value) {
            this._targetPort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceEndpointSpecPortsOutputReference.prototype, "targetPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetPort;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceEndpointSpecPortsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceEndpointSpecPortsOutputReference = ServiceEndpointSpecPortsOutputReference;
var ServiceEndpointSpecPortsList = /** @class */ (function (_super) {
    __extends(ServiceEndpointSpecPortsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceEndpointSpecPortsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceEndpointSpecPortsList.prototype.get = function (index) {
        return new ServiceEndpointSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceEndpointSpecPortsList;
}(cdktf.ComplexList));
exports.ServiceEndpointSpecPortsList = ServiceEndpointSpecPortsList;
function serviceEndpointSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        ports: cdktf.listMapper(serviceEndpointSpecPortsToTerraform, true)(struct.ports),
    };
}
function serviceEndpointSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ports: {
            value: cdktf.listMapperHcl(serviceEndpointSpecPortsToHclTerraform, true)(struct.ports),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceEndpointSpecPortsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceEndpointSpecOutputReference = /** @class */ (function (_super) {
    __extends(ServiceEndpointSpecOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceEndpointSpecOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // ports - computed: false, optional: true, required: false
        _this._ports = new ServiceEndpointSpecPortsList(_this, "ports", false);
        return _this;
    }
    Object.defineProperty(ServiceEndpointSpecOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (((_a = this._ports) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ports = (_b = this._ports) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._mode = undefined;
                this._ports.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._mode = value.mode;
                this._ports.internalValue = value.ports;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceEndpointSpecOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceEndpointSpecOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(ServiceEndpointSpecOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceEndpointSpecOutputReference.prototype, "ports", {
        get: function () {
            return this._ports;
        },
        enumerable: false,
        configurable: true
    });
    ServiceEndpointSpecOutputReference.prototype.putPorts = function (value) {
        this._ports.internalValue = value;
    };
    ServiceEndpointSpecOutputReference.prototype.resetPorts = function () {
        this._ports.internalValue = undefined;
    };
    Object.defineProperty(ServiceEndpointSpecOutputReference.prototype, "portsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ports.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceEndpointSpecOutputReference;
}(cdktf.ComplexObject));
exports.ServiceEndpointSpecOutputReference = ServiceEndpointSpecOutputReference;
function serviceLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function serviceLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var ServiceLabelsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceLabelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceLabelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceLabelsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._label !== undefined) {
                hasAnyValues = true;
                internalValueResult.label = this._label;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._label = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._label = value.label;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceLabelsOutputReference.prototype, "label", {
        get: function () {
            return this.getStringAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceLabelsOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceLabelsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceLabelsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceLabelsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceLabelsOutputReference = ServiceLabelsOutputReference;
var ServiceLabelsList = /** @class */ (function (_super) {
    __extends(ServiceLabelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceLabelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceLabelsList.prototype.get = function (index) {
        return new ServiceLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceLabelsList;
}(cdktf.ComplexList));
exports.ServiceLabelsList = ServiceLabelsList;
function serviceModeReplicatedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        replicas: cdktf.numberToTerraform(struct.replicas),
    };
}
function serviceModeReplicatedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        replicas: {
            value: cdktf.numberToHclTerraform(struct.replicas),
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
var ServiceModeReplicatedOutputReference = /** @class */ (function (_super) {
    __extends(ServiceModeReplicatedOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceModeReplicatedOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceModeReplicatedOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._replicas !== undefined) {
                hasAnyValues = true;
                internalValueResult.replicas = this._replicas;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._replicas = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._replicas = value.replicas;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceModeReplicatedOutputReference.prototype, "replicas", {
        get: function () {
            return this.getNumberAttribute('replicas');
        },
        set: function (value) {
            this._replicas = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceModeReplicatedOutputReference.prototype.resetReplicas = function () {
        this._replicas = undefined;
    };
    Object.defineProperty(ServiceModeReplicatedOutputReference.prototype, "replicasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicas;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceModeReplicatedOutputReference;
}(cdktf.ComplexObject));
exports.ServiceModeReplicatedOutputReference = ServiceModeReplicatedOutputReference;
function serviceModeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        global: cdktf.booleanToTerraform(struct.global),
        replicated: serviceModeReplicatedToTerraform(struct.replicated),
    };
}
function serviceModeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        global: {
            value: cdktf.booleanToHclTerraform(struct.global),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        replicated: {
            value: serviceModeReplicatedToHclTerraform(struct.replicated),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceModeReplicatedList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceModeOutputReference = /** @class */ (function (_super) {
    __extends(ServiceModeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceModeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // replicated - computed: false, optional: true, required: false
        _this._replicated = new ServiceModeReplicatedOutputReference(_this, "replicated");
        return _this;
    }
    Object.defineProperty(ServiceModeOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._global !== undefined) {
                hasAnyValues = true;
                internalValueResult.global = this._global;
            }
            if (((_a = this._replicated) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.replicated = (_b = this._replicated) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._global = undefined;
                this._replicated.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._global = value.global;
                this._replicated.internalValue = value.replicated;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceModeOutputReference.prototype, "global", {
        get: function () {
            return this.getBooleanAttribute('global');
        },
        set: function (value) {
            this._global = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceModeOutputReference.prototype.resetGlobal = function () {
        this._global = undefined;
    };
    Object.defineProperty(ServiceModeOutputReference.prototype, "globalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._global;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceModeOutputReference.prototype, "replicated", {
        get: function () {
            return this._replicated;
        },
        enumerable: false,
        configurable: true
    });
    ServiceModeOutputReference.prototype.putReplicated = function (value) {
        this._replicated.internalValue = value;
    };
    ServiceModeOutputReference.prototype.resetReplicated = function () {
        this._replicated.internalValue = undefined;
    };
    Object.defineProperty(ServiceModeOutputReference.prototype, "replicatedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicated.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceModeOutputReference;
}(cdktf.ComplexObject));
exports.ServiceModeOutputReference = ServiceModeOutputReference;
function serviceRollbackConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delay: cdktf.stringToTerraform(struct.delay),
        failure_action: cdktf.stringToTerraform(struct.failureAction),
        max_failure_ratio: cdktf.stringToTerraform(struct.maxFailureRatio),
        monitor: cdktf.stringToTerraform(struct.monitor),
        order: cdktf.stringToTerraform(struct.order),
        parallelism: cdktf.numberToTerraform(struct.parallelism),
    };
}
function serviceRollbackConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        delay: {
            value: cdktf.stringToHclTerraform(struct.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        failure_action: {
            value: cdktf.stringToHclTerraform(struct.failureAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_failure_ratio: {
            value: cdktf.stringToHclTerraform(struct.maxFailureRatio),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitor: {
            value: cdktf.stringToHclTerraform(struct.monitor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallelism: {
            value: cdktf.numberToHclTerraform(struct.parallelism),
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
var ServiceRollbackConfigOutputReference = /** @class */ (function (_super) {
    __extends(ServiceRollbackConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceRollbackConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._delay !== undefined) {
                hasAnyValues = true;
                internalValueResult.delay = this._delay;
            }
            if (this._failureAction !== undefined) {
                hasAnyValues = true;
                internalValueResult.failureAction = this._failureAction;
            }
            if (this._maxFailureRatio !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxFailureRatio = this._maxFailureRatio;
            }
            if (this._monitor !== undefined) {
                hasAnyValues = true;
                internalValueResult.monitor = this._monitor;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._parallelism !== undefined) {
                hasAnyValues = true;
                internalValueResult.parallelism = this._parallelism;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._delay = undefined;
                this._failureAction = undefined;
                this._maxFailureRatio = undefined;
                this._monitor = undefined;
                this._order = undefined;
                this._parallelism = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._delay = value.delay;
                this._failureAction = value.failureAction;
                this._maxFailureRatio = value.maxFailureRatio;
                this._monitor = value.monitor;
                this._order = value.order;
                this._parallelism = value.parallelism;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "delay", {
        get: function () {
            return this.getStringAttribute('delay');
        },
        set: function (value) {
            this._delay = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceRollbackConfigOutputReference.prototype.resetDelay = function () {
        this._delay = undefined;
    };
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "delayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "failureAction", {
        get: function () {
            return this.getStringAttribute('failure_action');
        },
        set: function (value) {
            this._failureAction = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceRollbackConfigOutputReference.prototype.resetFailureAction = function () {
        this._failureAction = undefined;
    };
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "failureActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failureAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "maxFailureRatio", {
        get: function () {
            return this.getStringAttribute('max_failure_ratio');
        },
        set: function (value) {
            this._maxFailureRatio = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceRollbackConfigOutputReference.prototype.resetMaxFailureRatio = function () {
        this._maxFailureRatio = undefined;
    };
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "maxFailureRatioInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFailureRatio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "monitor", {
        get: function () {
            return this.getStringAttribute('monitor');
        },
        set: function (value) {
            this._monitor = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceRollbackConfigOutputReference.prototype.resetMonitor = function () {
        this._monitor = undefined;
    };
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "monitorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceRollbackConfigOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "parallelism", {
        get: function () {
            return this.getNumberAttribute('parallelism');
        },
        set: function (value) {
            this._parallelism = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceRollbackConfigOutputReference.prototype.resetParallelism = function () {
        this._parallelism = undefined;
    };
    Object.defineProperty(ServiceRollbackConfigOutputReference.prototype, "parallelismInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parallelism;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceRollbackConfigOutputReference;
}(cdktf.ComplexObject));
exports.ServiceRollbackConfigOutputReference = ServiceRollbackConfigOutputReference;
function serviceTaskSpecContainerSpecConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        config_id: cdktf.stringToTerraform(struct.configId),
        config_name: cdktf.stringToTerraform(struct.configName),
        file_gid: cdktf.stringToTerraform(struct.fileGid),
        file_mode: cdktf.numberToTerraform(struct.fileMode),
        file_name: cdktf.stringToTerraform(struct.fileName),
        file_uid: cdktf.stringToTerraform(struct.fileUid),
    };
}
function serviceTaskSpecContainerSpecConfigsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        config_id: {
            value: cdktf.stringToHclTerraform(struct.configId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        config_name: {
            value: cdktf.stringToHclTerraform(struct.configName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_gid: {
            value: cdktf.stringToHclTerraform(struct.fileGid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_mode: {
            value: cdktf.numberToHclTerraform(struct.fileMode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        file_name: {
            value: cdktf.stringToHclTerraform(struct.fileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_uid: {
            value: cdktf.stringToHclTerraform(struct.fileUid),
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
var ServiceTaskSpecContainerSpecConfigsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecConfigsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecConfigsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._configId !== undefined) {
                hasAnyValues = true;
                internalValueResult.configId = this._configId;
            }
            if (this._configName !== undefined) {
                hasAnyValues = true;
                internalValueResult.configName = this._configName;
            }
            if (this._fileGid !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileGid = this._fileGid;
            }
            if (this._fileMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileMode = this._fileMode;
            }
            if (this._fileName !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileName = this._fileName;
            }
            if (this._fileUid !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileUid = this._fileUid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._configId = undefined;
                this._configName = undefined;
                this._fileGid = undefined;
                this._fileMode = undefined;
                this._fileName = undefined;
                this._fileUid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._configId = value.configId;
                this._configName = value.configName;
                this._fileGid = value.fileGid;
                this._fileMode = value.fileMode;
                this._fileName = value.fileName;
                this._fileUid = value.fileUid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "configId", {
        get: function () {
            return this.getStringAttribute('config_id');
        },
        set: function (value) {
            this._configId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "configIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "configName", {
        get: function () {
            return this.getStringAttribute('config_name');
        },
        set: function (value) {
            this._configName = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecConfigsOutputReference.prototype.resetConfigName = function () {
        this._configName = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "configNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "fileGid", {
        get: function () {
            return this.getStringAttribute('file_gid');
        },
        set: function (value) {
            this._fileGid = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecConfigsOutputReference.prototype.resetFileGid = function () {
        this._fileGid = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "fileGidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileGid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "fileMode", {
        get: function () {
            return this.getNumberAttribute('file_mode');
        },
        set: function (value) {
            this._fileMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecConfigsOutputReference.prototype.resetFileMode = function () {
        this._fileMode = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "fileModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "fileName", {
        get: function () {
            return this.getStringAttribute('file_name');
        },
        set: function (value) {
            this._fileName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "fileNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "fileUid", {
        get: function () {
            return this.getStringAttribute('file_uid');
        },
        set: function (value) {
            this._fileUid = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecConfigsOutputReference.prototype.resetFileUid = function () {
        this._fileUid = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecConfigsOutputReference.prototype, "fileUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileUid;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecConfigsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecConfigsOutputReference = ServiceTaskSpecContainerSpecConfigsOutputReference;
var ServiceTaskSpecContainerSpecConfigsList = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecConfigsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecConfigsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceTaskSpecContainerSpecConfigsList.prototype.get = function (index) {
        return new ServiceTaskSpecContainerSpecConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceTaskSpecContainerSpecConfigsList;
}(cdktf.ComplexList));
exports.ServiceTaskSpecContainerSpecConfigsList = ServiceTaskSpecContainerSpecConfigsList;
function serviceTaskSpecContainerSpecDnsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.nameservers),
        options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.options),
        search: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.search),
    };
}
function serviceTaskSpecContainerSpecDnsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        nameservers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.nameservers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        options: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.options),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        search: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.search),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecContainerSpecDnsConfigOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecDnsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecDnsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._nameservers !== undefined) {
                hasAnyValues = true;
                internalValueResult.nameservers = this._nameservers;
            }
            if (this._options !== undefined) {
                hasAnyValues = true;
                internalValueResult.options = this._options;
            }
            if (this._search !== undefined) {
                hasAnyValues = true;
                internalValueResult.search = this._search;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._nameservers = undefined;
                this._options = undefined;
                this._search = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._nameservers = value.nameservers;
                this._options = value.options;
                this._search = value.search;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype, "nameservers", {
        get: function () {
            return this.getListAttribute('nameservers');
        },
        set: function (value) {
            this._nameservers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype, "nameserversInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nameservers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype, "options", {
        get: function () {
            return this.getListAttribute('options');
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype.resetOptions = function () {
        this._options = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype, "search", {
        get: function () {
            return this.getListAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecDnsConfigOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecDnsConfigOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecDnsConfigOutputReference = ServiceTaskSpecContainerSpecDnsConfigOutputReference;
function serviceTaskSpecContainerSpecHealthcheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.stringToTerraform(struct.interval),
        retries: cdktf.numberToTerraform(struct.retries),
        start_period: cdktf.stringToTerraform(struct.startPeriod),
        test: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.test),
        timeout: cdktf.stringToTerraform(struct.timeout),
    };
}
function serviceTaskSpecContainerSpecHealthcheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        interval: {
            value: cdktf.stringToHclTerraform(struct.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retries: {
            value: cdktf.numberToHclTerraform(struct.retries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_period: {
            value: cdktf.stringToHclTerraform(struct.startPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        test: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.test),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        timeout: {
            value: cdktf.stringToHclTerraform(struct.timeout),
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
var ServiceTaskSpecContainerSpecHealthcheckOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecHealthcheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecHealthcheckOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._interval !== undefined) {
                hasAnyValues = true;
                internalValueResult.interval = this._interval;
            }
            if (this._retries !== undefined) {
                hasAnyValues = true;
                internalValueResult.retries = this._retries;
            }
            if (this._startPeriod !== undefined) {
                hasAnyValues = true;
                internalValueResult.startPeriod = this._startPeriod;
            }
            if (this._test !== undefined) {
                hasAnyValues = true;
                internalValueResult.test = this._test;
            }
            if (this._timeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.timeout = this._timeout;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._interval = undefined;
                this._retries = undefined;
                this._startPeriod = undefined;
                this._test = undefined;
                this._timeout = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._interval = value.interval;
                this._retries = value.retries;
                this._startPeriod = value.startPeriod;
                this._test = value.test;
                this._timeout = value.timeout;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "interval", {
        get: function () {
            return this.getStringAttribute('interval');
        },
        set: function (value) {
            this._interval = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype.resetInterval = function () {
        this._interval = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "intervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "retries", {
        get: function () {
            return this.getNumberAttribute('retries');
        },
        set: function (value) {
            this._retries = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype.resetRetries = function () {
        this._retries = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "retriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "startPeriod", {
        get: function () {
            return this.getStringAttribute('start_period');
        },
        set: function (value) {
            this._startPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype.resetStartPeriod = function () {
        this._startPeriod = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "startPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "test", {
        get: function () {
            return this.getListAttribute('test');
        },
        set: function (value) {
            this._test = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype.resetTest = function () {
        this._test = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "testInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._test;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "timeout", {
        get: function () {
            return this.getStringAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecHealthcheckOutputReference.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecHealthcheckOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecHealthcheckOutputReference = ServiceTaskSpecContainerSpecHealthcheckOutputReference;
function serviceTaskSpecContainerSpecHostsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
function serviceTaskSpecContainerSpecHostsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecContainerSpecHostsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecHostsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecHostsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecHostsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
                this._ip = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
                this._ip = value.ip;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHostsOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHostsOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHostsOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecHostsOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecHostsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecHostsOutputReference = ServiceTaskSpecContainerSpecHostsOutputReference;
var ServiceTaskSpecContainerSpecHostsList = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecHostsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecHostsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceTaskSpecContainerSpecHostsList.prototype.get = function (index) {
        return new ServiceTaskSpecContainerSpecHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceTaskSpecContainerSpecHostsList;
}(cdktf.ComplexList));
exports.ServiceTaskSpecContainerSpecHostsList = ServiceTaskSpecContainerSpecHostsList;
function serviceTaskSpecContainerSpecLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function serviceTaskSpecContainerSpecLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var ServiceTaskSpecContainerSpecLabelsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecLabelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecLabelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecLabelsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._label !== undefined) {
                hasAnyValues = true;
                internalValueResult.label = this._label;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._label = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._label = value.label;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecLabelsOutputReference.prototype, "label", {
        get: function () {
            return this.getStringAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecLabelsOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecLabelsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecLabelsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecLabelsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecLabelsOutputReference = ServiceTaskSpecContainerSpecLabelsOutputReference;
var ServiceTaskSpecContainerSpecLabelsList = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecLabelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecLabelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceTaskSpecContainerSpecLabelsList.prototype.get = function (index) {
        return new ServiceTaskSpecContainerSpecLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceTaskSpecContainerSpecLabelsList;
}(cdktf.ComplexList));
exports.ServiceTaskSpecContainerSpecLabelsList = ServiceTaskSpecContainerSpecLabelsList;
function serviceTaskSpecContainerSpecMountsBindOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        propagation: cdktf.stringToTerraform(struct.propagation),
    };
}
function serviceTaskSpecContainerSpecMountsBindOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        propagation: {
            value: cdktf.stringToHclTerraform(struct.propagation),
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
var ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._propagation !== undefined) {
                hasAnyValues = true;
                internalValueResult.propagation = this._propagation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._propagation = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._propagation = value.propagation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.prototype, "propagation", {
        get: function () {
            return this.getStringAttribute('propagation');
        },
        set: function (value) {
            this._propagation = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.prototype.resetPropagation = function () {
        this._propagation = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.prototype, "propagationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propagation;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference = ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference;
function serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.numberToTerraform(struct.mode),
        size_bytes: cdktf.numberToTerraform(struct.sizeBytes),
    };
}
function serviceTaskSpecContainerSpecMountsTmpfsOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.numberToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        size_bytes: {
            value: cdktf.numberToHclTerraform(struct.sizeBytes),
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
var ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._sizeBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.sizeBytes = this._sizeBytes;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._mode = undefined;
                this._sizeBytes = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._mode = value.mode;
                this._sizeBytes = value.sizeBytes;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.prototype, "mode", {
        get: function () {
            return this.getNumberAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.prototype, "sizeBytes", {
        get: function () {
            return this.getNumberAttribute('size_bytes');
        },
        set: function (value) {
            this._sizeBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.prototype.resetSizeBytes = function () {
        this._sizeBytes = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.prototype, "sizeBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sizeBytes;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference = ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference;
function serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._label !== undefined) {
                hasAnyValues = true;
                internalValueResult.label = this._label;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._label = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._label = value.label;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.prototype, "label", {
        get: function () {
            return this.getStringAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference = ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference;
var ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.prototype.get = function (index) {
        return new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList;
}(cdktf.ComplexList));
exports.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList = ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList;
function serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        driver_name: cdktf.stringToTerraform(struct.driverName),
        driver_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.driverOptions),
        no_copy: cdktf.booleanToTerraform(struct.noCopy),
        labels: cdktf.listMapper(serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform, true)(struct.labels),
    };
}
function serviceTaskSpecContainerSpecMountsVolumeOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        driver_name: {
            value: cdktf.stringToHclTerraform(struct.driverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        driver_options: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.driverOptions),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        no_copy: {
            value: cdktf.booleanToHclTerraform(struct.noCopy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        labels: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToHclTerraform, true)(struct.labels),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // labels - computed: false, optional: true, required: false
        _this._labels = new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList(_this, "labels", true);
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._driverName !== undefined) {
                hasAnyValues = true;
                internalValueResult.driverName = this._driverName;
            }
            if (this._driverOptions !== undefined) {
                hasAnyValues = true;
                internalValueResult.driverOptions = this._driverOptions;
            }
            if (this._noCopy !== undefined) {
                hasAnyValues = true;
                internalValueResult.noCopy = this._noCopy;
            }
            if (((_a = this._labels) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.labels = (_b = this._labels) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._driverName = undefined;
                this._driverOptions = undefined;
                this._noCopy = undefined;
                this._labels.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._driverName = value.driverName;
                this._driverOptions = value.driverOptions;
                this._noCopy = value.noCopy;
                this._labels.internalValue = value.labels;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "driverName", {
        get: function () {
            return this.getStringAttribute('driver_name');
        },
        set: function (value) {
            this._driverName = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype.resetDriverName = function () {
        this._driverName = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "driverNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driverName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "driverOptions", {
        get: function () {
            return this.getStringMapAttribute('driver_options');
        },
        set: function (value) {
            this._driverOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype.resetDriverOptions = function () {
        this._driverOptions = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "driverOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driverOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "noCopy", {
        get: function () {
            return this.getBooleanAttribute('no_copy');
        },
        set: function (value) {
            this._noCopy = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype.resetNoCopy = function () {
        this._noCopy = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "noCopyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noCopy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype.putLabels = function (value) {
        this._labels.internalValue = value;
    };
    ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype.resetLabels = function () {
        this._labels.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference = ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference;
function serviceTaskSpecContainerSpecMountsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        source: cdktf.stringToTerraform(struct.source),
        target: cdktf.stringToTerraform(struct.target),
        type: cdktf.stringToTerraform(struct.type),
        bind_options: serviceTaskSpecContainerSpecMountsBindOptionsToTerraform(struct.bindOptions),
        tmpfs_options: serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform(struct.tmpfsOptions),
        volume_options: serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform(struct.volumeOptions),
    };
}
function serviceTaskSpecContainerSpecMountsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bind_options: {
            value: serviceTaskSpecContainerSpecMountsBindOptionsToHclTerraform(struct.bindOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecMountsBindOptionsList",
        },
        tmpfs_options: {
            value: serviceTaskSpecContainerSpecMountsTmpfsOptionsToHclTerraform(struct.tmpfsOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecMountsTmpfsOptionsList",
        },
        volume_options: {
            value: serviceTaskSpecContainerSpecMountsVolumeOptionsToHclTerraform(struct.volumeOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecMountsVolumeOptionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecContainerSpecMountsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecMountsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecMountsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // bind_options - computed: false, optional: true, required: false
        _this._bindOptions = new ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference(_this, "bind_options");
        // tmpfs_options - computed: false, optional: true, required: false
        _this._tmpfsOptions = new ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference(_this, "tmpfs_options");
        // volume_options - computed: false, optional: true, required: false
        _this._volumeOptions = new ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference(_this, "volume_options");
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._readOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.readOnly = this._readOnly;
            }
            if (this._source !== undefined) {
                hasAnyValues = true;
                internalValueResult.source = this._source;
            }
            if (this._target !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = this._target;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (((_a = this._bindOptions) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.bindOptions = (_b = this._bindOptions) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._tmpfsOptions) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.tmpfsOptions = (_d = this._tmpfsOptions) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._volumeOptions) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.volumeOptions = (_f = this._volumeOptions) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._readOnly = undefined;
                this._source = undefined;
                this._target = undefined;
                this._type = undefined;
                this._bindOptions.internalValue = undefined;
                this._tmpfsOptions.internalValue = undefined;
                this._volumeOptions.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._readOnly = value.readOnly;
                this._source = value.source;
                this._target = value.target;
                this._type = value.type;
                this._bindOptions.internalValue = value.bindOptions;
                this._tmpfsOptions.internalValue = value.tmpfsOptions;
                this._volumeOptions.internalValue = value.volumeOptions;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "readOnly", {
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsOutputReference.prototype.resetReadOnly = function () {
        this._readOnly = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "readOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsOutputReference.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "bindOptions", {
        get: function () {
            return this._bindOptions;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsOutputReference.prototype.putBindOptions = function (value) {
        this._bindOptions.internalValue = value;
    };
    ServiceTaskSpecContainerSpecMountsOutputReference.prototype.resetBindOptions = function () {
        this._bindOptions.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "bindOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bindOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "tmpfsOptions", {
        get: function () {
            return this._tmpfsOptions;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsOutputReference.prototype.putTmpfsOptions = function (value) {
        this._tmpfsOptions.internalValue = value;
    };
    ServiceTaskSpecContainerSpecMountsOutputReference.prototype.resetTmpfsOptions = function () {
        this._tmpfsOptions.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "tmpfsOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tmpfsOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "volumeOptions", {
        get: function () {
            return this._volumeOptions;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecMountsOutputReference.prototype.putVolumeOptions = function (value) {
        this._volumeOptions.internalValue = value;
    };
    ServiceTaskSpecContainerSpecMountsOutputReference.prototype.resetVolumeOptions = function () {
        this._volumeOptions.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecMountsOutputReference.prototype, "volumeOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecMountsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecMountsOutputReference = ServiceTaskSpecContainerSpecMountsOutputReference;
var ServiceTaskSpecContainerSpecMountsList = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecMountsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecMountsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceTaskSpecContainerSpecMountsList.prototype.get = function (index) {
        return new ServiceTaskSpecContainerSpecMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceTaskSpecContainerSpecMountsList;
}(cdktf.ComplexList));
exports.ServiceTaskSpecContainerSpecMountsList = ServiceTaskSpecContainerSpecMountsList;
function serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: cdktf.stringToTerraform(struct.file),
        registry: cdktf.stringToTerraform(struct.registry),
    };
}
function serviceTaskSpecContainerSpecPrivilegesCredentialSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        file: {
            value: cdktf.stringToHclTerraform(struct.file),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        registry: {
            value: cdktf.stringToHclTerraform(struct.registry),
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
var ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._file !== undefined) {
                hasAnyValues = true;
                internalValueResult.file = this._file;
            }
            if (this._registry !== undefined) {
                hasAnyValues = true;
                internalValueResult.registry = this._registry;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._file = undefined;
                this._registry = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._file = value.file;
                this._registry = value.registry;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.prototype, "file", {
        get: function () {
            return this.getStringAttribute('file');
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.prototype.resetFile = function () {
        this._file = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.prototype, "fileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._file;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.prototype, "registry", {
        get: function () {
            return this.getStringAttribute('registry');
        },
        set: function (value) {
            this._registry = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.prototype.resetRegistry = function () {
        this._registry = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.prototype, "registryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registry;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference = ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference;
function serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable: cdktf.booleanToTerraform(struct.disable),
        level: cdktf.stringToTerraform(struct.level),
        role: cdktf.stringToTerraform(struct.role),
        type: cdktf.stringToTerraform(struct.type),
        user: cdktf.stringToTerraform(struct.user),
    };
}
function serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        disable: {
            value: cdktf.booleanToHclTerraform(struct.disable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        level: {
            value: cdktf.stringToHclTerraform(struct.level),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role: {
            value: cdktf.stringToHclTerraform(struct.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
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
var ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._disable !== undefined) {
                hasAnyValues = true;
                internalValueResult.disable = this._disable;
            }
            if (this._level !== undefined) {
                hasAnyValues = true;
                internalValueResult.level = this._level;
            }
            if (this._role !== undefined) {
                hasAnyValues = true;
                internalValueResult.role = this._role;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._user !== undefined) {
                hasAnyValues = true;
                internalValueResult.user = this._user;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._disable = undefined;
                this._level = undefined;
                this._role = undefined;
                this._type = undefined;
                this._user = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._disable = value.disable;
                this._level = value.level;
                this._role = value.role;
                this._type = value.type;
                this._user = value.user;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "disable", {
        get: function () {
            return this.getBooleanAttribute('disable');
        },
        set: function (value) {
            this._disable = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype.resetDisable = function () {
        this._disable = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "disableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "level", {
        get: function () {
            return this.getStringAttribute('level');
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype.resetLevel = function () {
        this._level = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "levelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype.resetRole = function () {
        this._role = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype.resetUser = function () {
        this._user = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference = ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference;
function serviceTaskSpecContainerSpecPrivilegesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        credential_spec: serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform(struct.credentialSpec),
        se_linux_context: serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform(struct.seLinuxContext),
    };
}
function serviceTaskSpecContainerSpecPrivilegesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        credential_spec: {
            value: serviceTaskSpecContainerSpecPrivilegesCredentialSpecToHclTerraform(struct.credentialSpec),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecPrivilegesCredentialSpecList",
        },
        se_linux_context: {
            value: serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToHclTerraform(struct.seLinuxContext),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecContainerSpecPrivilegesOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecPrivilegesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecPrivilegesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // credential_spec - computed: false, optional: true, required: false
        _this._credentialSpec = new ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference(_this, "credential_spec");
        // se_linux_context - computed: false, optional: true, required: false
        _this._seLinuxContext = new ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference(_this, "se_linux_context");
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._credentialSpec) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.credentialSpec = (_b = this._credentialSpec) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._seLinuxContext) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.seLinuxContext = (_d = this._seLinuxContext) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._credentialSpec.internalValue = undefined;
                this._seLinuxContext.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._credentialSpec.internalValue = value.credentialSpec;
                this._seLinuxContext.internalValue = value.seLinuxContext;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype, "credentialSpec", {
        get: function () {
            return this._credentialSpec;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype.putCredentialSpec = function (value) {
        this._credentialSpec.internalValue = value;
    };
    ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype.resetCredentialSpec = function () {
        this._credentialSpec.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype, "credentialSpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentialSpec.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype, "seLinuxContext", {
        get: function () {
            return this._seLinuxContext;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype.putSeLinuxContext = function (value) {
        this._seLinuxContext.internalValue = value;
    };
    ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype.resetSeLinuxContext = function () {
        this._seLinuxContext.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecPrivilegesOutputReference.prototype, "seLinuxContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._seLinuxContext.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecPrivilegesOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecPrivilegesOutputReference = ServiceTaskSpecContainerSpecPrivilegesOutputReference;
function serviceTaskSpecContainerSpecSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_gid: cdktf.stringToTerraform(struct.fileGid),
        file_mode: cdktf.numberToTerraform(struct.fileMode),
        file_name: cdktf.stringToTerraform(struct.fileName),
        file_uid: cdktf.stringToTerraform(struct.fileUid),
        secret_id: cdktf.stringToTerraform(struct.secretId),
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function serviceTaskSpecContainerSpecSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        file_gid: {
            value: cdktf.stringToHclTerraform(struct.fileGid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_mode: {
            value: cdktf.numberToHclTerraform(struct.fileMode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        file_name: {
            value: cdktf.stringToHclTerraform(struct.fileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_uid: {
            value: cdktf.stringToHclTerraform(struct.fileUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktf.stringToHclTerraform(struct.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_name: {
            value: cdktf.stringToHclTerraform(struct.secretName),
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
var ServiceTaskSpecContainerSpecSecretsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecSecretsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecSecretsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._fileGid !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileGid = this._fileGid;
            }
            if (this._fileMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileMode = this._fileMode;
            }
            if (this._fileName !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileName = this._fileName;
            }
            if (this._fileUid !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileUid = this._fileUid;
            }
            if (this._secretId !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretId = this._secretId;
            }
            if (this._secretName !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretName = this._secretName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._fileGid = undefined;
                this._fileMode = undefined;
                this._fileName = undefined;
                this._fileUid = undefined;
                this._secretId = undefined;
                this._secretName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._fileGid = value.fileGid;
                this._fileMode = value.fileMode;
                this._fileName = value.fileName;
                this._fileUid = value.fileUid;
                this._secretId = value.secretId;
                this._secretName = value.secretName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "fileGid", {
        get: function () {
            return this.getStringAttribute('file_gid');
        },
        set: function (value) {
            this._fileGid = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecSecretsOutputReference.prototype.resetFileGid = function () {
        this._fileGid = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "fileGidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileGid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "fileMode", {
        get: function () {
            return this.getNumberAttribute('file_mode');
        },
        set: function (value) {
            this._fileMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecSecretsOutputReference.prototype.resetFileMode = function () {
        this._fileMode = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "fileModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "fileName", {
        get: function () {
            return this.getStringAttribute('file_name');
        },
        set: function (value) {
            this._fileName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "fileNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "fileUid", {
        get: function () {
            return this.getStringAttribute('file_uid');
        },
        set: function (value) {
            this._fileUid = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecSecretsOutputReference.prototype.resetFileUid = function () {
        this._fileUid = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "fileUidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileUid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "secretId", {
        get: function () {
            return this.getStringAttribute('secret_id');
        },
        set: function (value) {
            this._secretId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "secretIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "secretName", {
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        set: function (value) {
            this._secretName = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecSecretsOutputReference.prototype.resetSecretName = function () {
        this._secretName = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecSecretsOutputReference.prototype, "secretNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretName;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecSecretsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecSecretsOutputReference = ServiceTaskSpecContainerSpecSecretsOutputReference;
var ServiceTaskSpecContainerSpecSecretsList = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecSecretsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecContainerSpecSecretsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceTaskSpecContainerSpecSecretsList.prototype.get = function (index) {
        return new ServiceTaskSpecContainerSpecSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceTaskSpecContainerSpecSecretsList;
}(cdktf.ComplexList));
exports.ServiceTaskSpecContainerSpecSecretsList = ServiceTaskSpecContainerSpecSecretsList;
function serviceTaskSpecContainerSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.args),
        cap_add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.capAdd),
        cap_drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.capDrop),
        command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.command),
        dir: cdktf.stringToTerraform(struct.dir),
        env: cdktf.hashMapper(cdktf.stringToTerraform)(struct.env),
        groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.groups),
        hostname: cdktf.stringToTerraform(struct.hostname),
        image: cdktf.stringToTerraform(struct.image),
        isolation: cdktf.stringToTerraform(struct.isolation),
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        stop_grace_period: cdktf.stringToTerraform(struct.stopGracePeriod),
        stop_signal: cdktf.stringToTerraform(struct.stopSignal),
        sysctl: cdktf.hashMapper(cdktf.stringToTerraform)(struct.sysctl),
        user: cdktf.stringToTerraform(struct.user),
        configs: cdktf.listMapper(serviceTaskSpecContainerSpecConfigsToTerraform, true)(struct.configs),
        dns_config: serviceTaskSpecContainerSpecDnsConfigToTerraform(struct.dnsConfig),
        healthcheck: serviceTaskSpecContainerSpecHealthcheckToTerraform(struct.healthcheck),
        hosts: cdktf.listMapper(serviceTaskSpecContainerSpecHostsToTerraform, true)(struct.hosts),
        labels: cdktf.listMapper(serviceTaskSpecContainerSpecLabelsToTerraform, true)(struct.labels),
        mounts: cdktf.listMapper(serviceTaskSpecContainerSpecMountsToTerraform, true)(struct.mounts),
        privileges: serviceTaskSpecContainerSpecPrivilegesToTerraform(struct.privileges),
        secrets: cdktf.listMapper(serviceTaskSpecContainerSpecSecretsToTerraform, true)(struct.secrets),
    };
}
function serviceTaskSpecContainerSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        args: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.args),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cap_add: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.capAdd),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cap_drop: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.capDrop),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        command: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.command),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        dir: {
            value: cdktf.stringToHclTerraform(struct.dir),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        env: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.env),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        groups: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.groups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktf.stringToHclTerraform(struct.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        isolation: {
            value: cdktf.stringToHclTerraform(struct.isolation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        stop_grace_period: {
            value: cdktf.stringToHclTerraform(struct.stopGracePeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stop_signal: {
            value: cdktf.stringToHclTerraform(struct.stopSignal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sysctl: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.sysctl),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        configs: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecConfigsToHclTerraform, true)(struct.configs),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecConfigsList",
        },
        dns_config: {
            value: serviceTaskSpecContainerSpecDnsConfigToHclTerraform(struct.dnsConfig),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecDnsConfigList",
        },
        healthcheck: {
            value: serviceTaskSpecContainerSpecHealthcheckToHclTerraform(struct.healthcheck),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecHealthcheckList",
        },
        hosts: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecHostsToHclTerraform, true)(struct.hosts),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecHostsList",
        },
        labels: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecLabelsToHclTerraform, true)(struct.labels),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecLabelsList",
        },
        mounts: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecMountsToHclTerraform, true)(struct.mounts),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecMountsList",
        },
        privileges: {
            value: serviceTaskSpecContainerSpecPrivilegesToHclTerraform(struct.privileges),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecPrivilegesList",
        },
        secrets: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecSecretsToHclTerraform, true)(struct.secrets),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecSecretsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecContainerSpecOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecContainerSpecOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecContainerSpecOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // configs - computed: false, optional: true, required: false
        _this._configs = new ServiceTaskSpecContainerSpecConfigsList(_this, "configs", true);
        // dns_config - computed: false, optional: true, required: false
        _this._dnsConfig = new ServiceTaskSpecContainerSpecDnsConfigOutputReference(_this, "dns_config");
        // healthcheck - computed: false, optional: true, required: false
        _this._healthcheck = new ServiceTaskSpecContainerSpecHealthcheckOutputReference(_this, "healthcheck");
        // hosts - computed: false, optional: true, required: false
        _this._hosts = new ServiceTaskSpecContainerSpecHostsList(_this, "hosts", true);
        // labels - computed: false, optional: true, required: false
        _this._labels = new ServiceTaskSpecContainerSpecLabelsList(_this, "labels", true);
        // mounts - computed: false, optional: true, required: false
        _this._mounts = new ServiceTaskSpecContainerSpecMountsList(_this, "mounts", true);
        // privileges - computed: false, optional: true, required: false
        _this._privileges = new ServiceTaskSpecContainerSpecPrivilegesOutputReference(_this, "privileges");
        // secrets - computed: false, optional: true, required: false
        _this._secrets = new ServiceTaskSpecContainerSpecSecretsList(_this, "secrets", true);
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._args !== undefined) {
                hasAnyValues = true;
                internalValueResult.args = this._args;
            }
            if (this._capAdd !== undefined) {
                hasAnyValues = true;
                internalValueResult.capAdd = this._capAdd;
            }
            if (this._capDrop !== undefined) {
                hasAnyValues = true;
                internalValueResult.capDrop = this._capDrop;
            }
            if (this._command !== undefined) {
                hasAnyValues = true;
                internalValueResult.command = this._command;
            }
            if (this._dir !== undefined) {
                hasAnyValues = true;
                internalValueResult.dir = this._dir;
            }
            if (this._env !== undefined) {
                hasAnyValues = true;
                internalValueResult.env = this._env;
            }
            if (this._groups !== undefined) {
                hasAnyValues = true;
                internalValueResult.groups = this._groups;
            }
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (this._image !== undefined) {
                hasAnyValues = true;
                internalValueResult.image = this._image;
            }
            if (this._isolation !== undefined) {
                hasAnyValues = true;
                internalValueResult.isolation = this._isolation;
            }
            if (this._readOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.readOnly = this._readOnly;
            }
            if (this._stopGracePeriod !== undefined) {
                hasAnyValues = true;
                internalValueResult.stopGracePeriod = this._stopGracePeriod;
            }
            if (this._stopSignal !== undefined) {
                hasAnyValues = true;
                internalValueResult.stopSignal = this._stopSignal;
            }
            if (this._sysctl !== undefined) {
                hasAnyValues = true;
                internalValueResult.sysctl = this._sysctl;
            }
            if (this._user !== undefined) {
                hasAnyValues = true;
                internalValueResult.user = this._user;
            }
            if (((_a = this._configs) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.configs = (_b = this._configs) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._dnsConfig) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.dnsConfig = (_d = this._dnsConfig) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._healthcheck) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.healthcheck = (_f = this._healthcheck) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._hosts) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.hosts = (_h = this._hosts) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._labels) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.labels = (_k = this._labels) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._mounts) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.mounts = (_m = this._mounts) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (((_o = this._privileges) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.privileges = (_p = this._privileges) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (((_q = this._secrets) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.secrets = (_r = this._secrets) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._args = undefined;
                this._capAdd = undefined;
                this._capDrop = undefined;
                this._command = undefined;
                this._dir = undefined;
                this._env = undefined;
                this._groups = undefined;
                this._hostname = undefined;
                this._image = undefined;
                this._isolation = undefined;
                this._readOnly = undefined;
                this._stopGracePeriod = undefined;
                this._stopSignal = undefined;
                this._sysctl = undefined;
                this._user = undefined;
                this._configs.internalValue = undefined;
                this._dnsConfig.internalValue = undefined;
                this._healthcheck.internalValue = undefined;
                this._hosts.internalValue = undefined;
                this._labels.internalValue = undefined;
                this._mounts.internalValue = undefined;
                this._privileges.internalValue = undefined;
                this._secrets.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._args = value.args;
                this._capAdd = value.capAdd;
                this._capDrop = value.capDrop;
                this._command = value.command;
                this._dir = value.dir;
                this._env = value.env;
                this._groups = value.groups;
                this._hostname = value.hostname;
                this._image = value.image;
                this._isolation = value.isolation;
                this._readOnly = value.readOnly;
                this._stopGracePeriod = value.stopGracePeriod;
                this._stopSignal = value.stopSignal;
                this._sysctl = value.sysctl;
                this._user = value.user;
                this._configs.internalValue = value.configs;
                this._dnsConfig.internalValue = value.dnsConfig;
                this._healthcheck.internalValue = value.healthcheck;
                this._hosts.internalValue = value.hosts;
                this._labels.internalValue = value.labels;
                this._mounts.internalValue = value.mounts;
                this._privileges.internalValue = value.privileges;
                this._secrets.internalValue = value.secrets;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "args", {
        get: function () {
            return this.getListAttribute('args');
        },
        set: function (value) {
            this._args = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetArgs = function () {
        this._args = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "argsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._args;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "capAdd", {
        get: function () {
            return this.getListAttribute('cap_add');
        },
        set: function (value) {
            this._capAdd = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetCapAdd = function () {
        this._capAdd = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "capAddInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capAdd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "capDrop", {
        get: function () {
            return this.getListAttribute('cap_drop');
        },
        set: function (value) {
            this._capDrop = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetCapDrop = function () {
        this._capDrop = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "capDropInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capDrop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "command", {
        get: function () {
            return this.getListAttribute('command');
        },
        set: function (value) {
            this._command = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetCommand = function () {
        this._command = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "commandInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._command;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "dir", {
        get: function () {
            return this.getStringAttribute('dir');
        },
        set: function (value) {
            this._dir = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetDir = function () {
        this._dir = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "dirInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "env", {
        get: function () {
            return this.getStringMapAttribute('env');
        },
        set: function (value) {
            this._env = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetEnv = function () {
        this._env = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "envInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._env;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "groups", {
        get: function () {
            return this.getListAttribute('groups');
        },
        set: function (value) {
            this._groups = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetGroups = function () {
        this._groups = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "groupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "image", {
        get: function () {
            return this.getStringAttribute('image');
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "imageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "isolation", {
        get: function () {
            return this.getStringAttribute('isolation');
        },
        set: function (value) {
            this._isolation = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetIsolation = function () {
        this._isolation = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "isolationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isolation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "readOnly", {
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetReadOnly = function () {
        this._readOnly = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "readOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "stopGracePeriod", {
        get: function () {
            return this.getStringAttribute('stop_grace_period');
        },
        set: function (value) {
            this._stopGracePeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetStopGracePeriod = function () {
        this._stopGracePeriod = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "stopGracePeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stopGracePeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "stopSignal", {
        get: function () {
            return this.getStringAttribute('stop_signal');
        },
        set: function (value) {
            this._stopSignal = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetStopSignal = function () {
        this._stopSignal = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "stopSignalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stopSignal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "sysctl", {
        get: function () {
            return this.getStringMapAttribute('sysctl');
        },
        set: function (value) {
            this._sysctl = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetSysctl = function () {
        this._sysctl = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "sysctlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sysctl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetUser = function () {
        this._user = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "configs", {
        get: function () {
            return this._configs;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.putConfigs = function (value) {
        this._configs.internalValue = value;
    };
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetConfigs = function () {
        this._configs.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "configsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configs.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "dnsConfig", {
        get: function () {
            return this._dnsConfig;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.putDnsConfig = function (value) {
        this._dnsConfig.internalValue = value;
    };
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetDnsConfig = function () {
        this._dnsConfig.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "dnsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "healthcheck", {
        get: function () {
            return this._healthcheck;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.putHealthcheck = function (value) {
        this._healthcheck.internalValue = value;
    };
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetHealthcheck = function () {
        this._healthcheck.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "healthcheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthcheck.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "hosts", {
        get: function () {
            return this._hosts;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.putHosts = function (value) {
        this._hosts.internalValue = value;
    };
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetHosts = function () {
        this._hosts.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "hostsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hosts.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.putLabels = function (value) {
        this._labels.internalValue = value;
    };
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetLabels = function () {
        this._labels.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "mounts", {
        get: function () {
            return this._mounts;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.putMounts = function (value) {
        this._mounts.internalValue = value;
    };
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetMounts = function () {
        this._mounts.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "mountsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mounts.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "privileges", {
        get: function () {
            return this._privileges;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.putPrivileges = function (value) {
        this._privileges.internalValue = value;
    };
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetPrivileges = function () {
        this._privileges.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "privilegesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privileges.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "secrets", {
        get: function () {
            return this._secrets;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecContainerSpecOutputReference.prototype.putSecrets = function (value) {
        this._secrets.internalValue = value;
    };
    ServiceTaskSpecContainerSpecOutputReference.prototype.resetSecrets = function () {
        this._secrets.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecContainerSpecOutputReference.prototype, "secretsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secrets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecContainerSpecOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecContainerSpecOutputReference = ServiceTaskSpecContainerSpecOutputReference;
function serviceTaskSpecLogDriverToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.options),
    };
}
function serviceTaskSpecLogDriverToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        options: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.options),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecLogDriverOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecLogDriverOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecLogDriverOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecLogDriverOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._options !== undefined) {
                hasAnyValues = true;
                internalValueResult.options = this._options;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._name = undefined;
                this._options = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._name = value.name;
                this._options = value.options;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecLogDriverOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecLogDriverOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecLogDriverOutputReference.prototype, "options", {
        get: function () {
            return this.getStringMapAttribute('options');
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecLogDriverOutputReference.prototype.resetOptions = function () {
        this._options = undefined;
    };
    Object.defineProperty(ServiceTaskSpecLogDriverOutputReference.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecLogDriverOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecLogDriverOutputReference = ServiceTaskSpecLogDriverOutputReference;
function serviceTaskSpecNetworksAdvancedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.aliases),
        driver_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.driverOpts),
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function serviceTaskSpecNetworksAdvancedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aliases: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.aliases),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        driver_opts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.driverOpts),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var ServiceTaskSpecNetworksAdvancedOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecNetworksAdvancedOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecNetworksAdvancedOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._aliases !== undefined) {
                hasAnyValues = true;
                internalValueResult.aliases = this._aliases;
            }
            if (this._driverOpts !== undefined) {
                hasAnyValues = true;
                internalValueResult.driverOpts = this._driverOpts;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._aliases = undefined;
                this._driverOpts = undefined;
                this._id = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._aliases = value.aliases;
                this._driverOpts = value.driverOpts;
                this._id = value.id;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "aliases", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('aliases'));
        },
        set: function (value) {
            this._aliases = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecNetworksAdvancedOutputReference.prototype.resetAliases = function () {
        this._aliases = undefined;
    };
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "aliasesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aliases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "driverOpts", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('driver_opts'));
        },
        set: function (value) {
            this._driverOpts = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecNetworksAdvancedOutputReference.prototype.resetDriverOpts = function () {
        this._driverOpts = undefined;
    };
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "driverOptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driverOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecNetworksAdvancedOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecNetworksAdvancedOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ServiceTaskSpecNetworksAdvancedOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecNetworksAdvancedOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecNetworksAdvancedOutputReference = ServiceTaskSpecNetworksAdvancedOutputReference;
var ServiceTaskSpecNetworksAdvancedList = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecNetworksAdvancedList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecNetworksAdvancedList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceTaskSpecNetworksAdvancedList.prototype.get = function (index) {
        return new ServiceTaskSpecNetworksAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceTaskSpecNetworksAdvancedList;
}(cdktf.ComplexList));
exports.ServiceTaskSpecNetworksAdvancedList = ServiceTaskSpecNetworksAdvancedList;
function serviceTaskSpecPlacementPlatformsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        architecture: cdktf.stringToTerraform(struct.architecture),
        os: cdktf.stringToTerraform(struct.os),
    };
}
function serviceTaskSpecPlacementPlatformsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        architecture: {
            value: cdktf.stringToHclTerraform(struct.architecture),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os: {
            value: cdktf.stringToHclTerraform(struct.os),
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
var ServiceTaskSpecPlacementPlatformsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecPlacementPlatformsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecPlacementPlatformsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecPlacementPlatformsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._architecture !== undefined) {
                hasAnyValues = true;
                internalValueResult.architecture = this._architecture;
            }
            if (this._os !== undefined) {
                hasAnyValues = true;
                internalValueResult.os = this._os;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._architecture = undefined;
                this._os = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._architecture = value.architecture;
                this._os = value.os;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecPlacementPlatformsOutputReference.prototype, "architecture", {
        get: function () {
            return this.getStringAttribute('architecture');
        },
        set: function (value) {
            this._architecture = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecPlacementPlatformsOutputReference.prototype, "architectureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._architecture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecPlacementPlatformsOutputReference.prototype, "os", {
        get: function () {
            return this.getStringAttribute('os');
        },
        set: function (value) {
            this._os = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecPlacementPlatformsOutputReference.prototype, "osInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._os;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecPlacementPlatformsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecPlacementPlatformsOutputReference = ServiceTaskSpecPlacementPlatformsOutputReference;
var ServiceTaskSpecPlacementPlatformsList = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecPlacementPlatformsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ServiceTaskSpecPlacementPlatformsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ServiceTaskSpecPlacementPlatformsList.prototype.get = function (index) {
        return new ServiceTaskSpecPlacementPlatformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ServiceTaskSpecPlacementPlatformsList;
}(cdktf.ComplexList));
exports.ServiceTaskSpecPlacementPlatformsList = ServiceTaskSpecPlacementPlatformsList;
function serviceTaskSpecPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        constraints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.constraints),
        max_replicas: cdktf.numberToTerraform(struct.maxReplicas),
        prefs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.prefs),
        platforms: cdktf.listMapper(serviceTaskSpecPlacementPlatformsToTerraform, true)(struct.platforms),
    };
}
function serviceTaskSpecPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        constraints: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.constraints),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        max_replicas: {
            value: cdktf.numberToHclTerraform(struct.maxReplicas),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        prefs: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.prefs),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        platforms: {
            value: cdktf.listMapperHcl(serviceTaskSpecPlacementPlatformsToHclTerraform, true)(struct.platforms),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecPlacementPlatformsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecPlacementOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // platforms - computed: false, optional: true, required: false
        _this._platforms = new ServiceTaskSpecPlacementPlatformsList(_this, "platforms", true);
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._constraints !== undefined) {
                hasAnyValues = true;
                internalValueResult.constraints = this._constraints;
            }
            if (this._maxReplicas !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxReplicas = this._maxReplicas;
            }
            if (this._prefs !== undefined) {
                hasAnyValues = true;
                internalValueResult.prefs = this._prefs;
            }
            if (((_a = this._platforms) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.platforms = (_b = this._platforms) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._constraints = undefined;
                this._maxReplicas = undefined;
                this._prefs = undefined;
                this._platforms.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._constraints = value.constraints;
                this._maxReplicas = value.maxReplicas;
                this._prefs = value.prefs;
                this._platforms.internalValue = value.platforms;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "constraints", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('constraints'));
        },
        set: function (value) {
            this._constraints = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecPlacementOutputReference.prototype.resetConstraints = function () {
        this._constraints = undefined;
    };
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "constraintsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._constraints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "maxReplicas", {
        get: function () {
            return this.getNumberAttribute('max_replicas');
        },
        set: function (value) {
            this._maxReplicas = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecPlacementOutputReference.prototype.resetMaxReplicas = function () {
        this._maxReplicas = undefined;
    };
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "maxReplicasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxReplicas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "prefs", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('prefs'));
        },
        set: function (value) {
            this._prefs = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecPlacementOutputReference.prototype.resetPrefs = function () {
        this._prefs = undefined;
    };
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "prefsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "platforms", {
        get: function () {
            return this._platforms;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecPlacementOutputReference.prototype.putPlatforms = function (value) {
        this._platforms.internalValue = value;
    };
    ServiceTaskSpecPlacementOutputReference.prototype.resetPlatforms = function () {
        this._platforms.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecPlacementOutputReference.prototype, "platformsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platforms.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecPlacementOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecPlacementOutputReference = ServiceTaskSpecPlacementOutputReference;
function serviceTaskSpecResourcesLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        memory_bytes: cdktf.numberToTerraform(struct.memoryBytes),
        nano_cpus: cdktf.numberToTerraform(struct.nanoCpus),
    };
}
function serviceTaskSpecResourcesLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        memory_bytes: {
            value: cdktf.numberToHclTerraform(struct.memoryBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        nano_cpus: {
            value: cdktf.numberToHclTerraform(struct.nanoCpus),
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
var ServiceTaskSpecResourcesLimitsOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecResourcesLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecResourcesLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecResourcesLimitsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._memoryBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.memoryBytes = this._memoryBytes;
            }
            if (this._nanoCpus !== undefined) {
                hasAnyValues = true;
                internalValueResult.nanoCpus = this._nanoCpus;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._memoryBytes = undefined;
                this._nanoCpus = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._memoryBytes = value.memoryBytes;
                this._nanoCpus = value.nanoCpus;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesLimitsOutputReference.prototype, "memoryBytes", {
        get: function () {
            return this.getNumberAttribute('memory_bytes');
        },
        set: function (value) {
            this._memoryBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesLimitsOutputReference.prototype.resetMemoryBytes = function () {
        this._memoryBytes = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesLimitsOutputReference.prototype, "memoryBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memoryBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesLimitsOutputReference.prototype, "nanoCpus", {
        get: function () {
            return this.getNumberAttribute('nano_cpus');
        },
        set: function (value) {
            this._nanoCpus = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesLimitsOutputReference.prototype.resetNanoCpus = function () {
        this._nanoCpus = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesLimitsOutputReference.prototype, "nanoCpusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nanoCpus;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecResourcesLimitsOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecResourcesLimitsOutputReference = ServiceTaskSpecResourcesLimitsOutputReference;
function serviceTaskSpecResourcesReservationGenericResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        discrete_resources_spec: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.discreteResourcesSpec),
        named_resources_spec: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.namedResourcesSpec),
    };
}
function serviceTaskSpecResourcesReservationGenericResourcesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        discrete_resources_spec: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.discreteResourcesSpec),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        named_resources_spec: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.namedResourcesSpec),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecResourcesReservationGenericResourcesOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecResourcesReservationGenericResourcesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecResourcesReservationGenericResourcesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._discreteResourcesSpec !== undefined) {
                hasAnyValues = true;
                internalValueResult.discreteResourcesSpec = this._discreteResourcesSpec;
            }
            if (this._namedResourcesSpec !== undefined) {
                hasAnyValues = true;
                internalValueResult.namedResourcesSpec = this._namedResourcesSpec;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._discreteResourcesSpec = undefined;
                this._namedResourcesSpec = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._discreteResourcesSpec = value.discreteResourcesSpec;
                this._namedResourcesSpec = value.namedResourcesSpec;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.prototype, "discreteResourcesSpec", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('discrete_resources_spec'));
        },
        set: function (value) {
            this._discreteResourcesSpec = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.prototype.resetDiscreteResourcesSpec = function () {
        this._discreteResourcesSpec = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.prototype, "discreteResourcesSpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._discreteResourcesSpec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.prototype, "namedResourcesSpec", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('named_resources_spec'));
        },
        set: function (value) {
            this._namedResourcesSpec = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.prototype.resetNamedResourcesSpec = function () {
        this._namedResourcesSpec = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.prototype, "namedResourcesSpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namedResourcesSpec;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecResourcesReservationGenericResourcesOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference = ServiceTaskSpecResourcesReservationGenericResourcesOutputReference;
function serviceTaskSpecResourcesReservationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        memory_bytes: cdktf.numberToTerraform(struct.memoryBytes),
        nano_cpus: cdktf.numberToTerraform(struct.nanoCpus),
        generic_resources: serviceTaskSpecResourcesReservationGenericResourcesToTerraform(struct.genericResources),
    };
}
function serviceTaskSpecResourcesReservationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        memory_bytes: {
            value: cdktf.numberToHclTerraform(struct.memoryBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        nano_cpus: {
            value: cdktf.numberToHclTerraform(struct.nanoCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        generic_resources: {
            value: serviceTaskSpecResourcesReservationGenericResourcesToHclTerraform(struct.genericResources),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecResourcesReservationGenericResourcesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecResourcesReservationOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecResourcesReservationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecResourcesReservationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // generic_resources - computed: false, optional: true, required: false
        _this._genericResources = new ServiceTaskSpecResourcesReservationGenericResourcesOutputReference(_this, "generic_resources");
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecResourcesReservationOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._memoryBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.memoryBytes = this._memoryBytes;
            }
            if (this._nanoCpus !== undefined) {
                hasAnyValues = true;
                internalValueResult.nanoCpus = this._nanoCpus;
            }
            if (((_a = this._genericResources) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.genericResources = (_b = this._genericResources) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._memoryBytes = undefined;
                this._nanoCpus = undefined;
                this._genericResources.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._memoryBytes = value.memoryBytes;
                this._nanoCpus = value.nanoCpus;
                this._genericResources.internalValue = value.genericResources;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesReservationOutputReference.prototype, "memoryBytes", {
        get: function () {
            return this.getNumberAttribute('memory_bytes');
        },
        set: function (value) {
            this._memoryBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesReservationOutputReference.prototype.resetMemoryBytes = function () {
        this._memoryBytes = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesReservationOutputReference.prototype, "memoryBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memoryBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesReservationOutputReference.prototype, "nanoCpus", {
        get: function () {
            return this.getNumberAttribute('nano_cpus');
        },
        set: function (value) {
            this._nanoCpus = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesReservationOutputReference.prototype.resetNanoCpus = function () {
        this._nanoCpus = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesReservationOutputReference.prototype, "nanoCpusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nanoCpus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesReservationOutputReference.prototype, "genericResources", {
        get: function () {
            return this._genericResources;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesReservationOutputReference.prototype.putGenericResources = function (value) {
        this._genericResources.internalValue = value;
    };
    ServiceTaskSpecResourcesReservationOutputReference.prototype.resetGenericResources = function () {
        this._genericResources.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesReservationOutputReference.prototype, "genericResourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._genericResources.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecResourcesReservationOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecResourcesReservationOutputReference = ServiceTaskSpecResourcesReservationOutputReference;
function serviceTaskSpecResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        limits: serviceTaskSpecResourcesLimitsToTerraform(struct.limits),
        reservation: serviceTaskSpecResourcesReservationToTerraform(struct.reservation),
    };
}
function serviceTaskSpecResourcesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        limits: {
            value: serviceTaskSpecResourcesLimitsToHclTerraform(struct.limits),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecResourcesLimitsList",
        },
        reservation: {
            value: serviceTaskSpecResourcesReservationToHclTerraform(struct.reservation),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecResourcesReservationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecResourcesOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecResourcesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecResourcesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // limits - computed: false, optional: true, required: false
        _this._limits = new ServiceTaskSpecResourcesLimitsOutputReference(_this, "limits");
        // reservation - computed: false, optional: true, required: false
        _this._reservation = new ServiceTaskSpecResourcesReservationOutputReference(_this, "reservation");
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecResourcesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._limits) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.limits = (_b = this._limits) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._reservation) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.reservation = (_d = this._reservation) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._limits.internalValue = undefined;
                this._reservation.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._limits.internalValue = value.limits;
                this._reservation.internalValue = value.reservation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesOutputReference.prototype.putLimits = function (value) {
        this._limits.internalValue = value;
    };
    ServiceTaskSpecResourcesOutputReference.prototype.resetLimits = function () {
        this._limits.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesOutputReference.prototype, "limitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limits.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecResourcesOutputReference.prototype, "reservation", {
        get: function () {
            return this._reservation;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecResourcesOutputReference.prototype.putReservation = function (value) {
        this._reservation.internalValue = value;
    };
    ServiceTaskSpecResourcesOutputReference.prototype.resetReservation = function () {
        this._reservation.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecResourcesOutputReference.prototype, "reservationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reservation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecResourcesOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecResourcesOutputReference = ServiceTaskSpecResourcesOutputReference;
function serviceTaskSpecRestartPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        delay: cdktf.stringToTerraform(struct.delay),
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        window: cdktf.stringToTerraform(struct.window),
    };
}
function serviceTaskSpecRestartPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        condition: {
            value: cdktf.stringToHclTerraform(struct.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delay: {
            value: cdktf.stringToHclTerraform(struct.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_attempts: {
            value: cdktf.numberToHclTerraform(struct.maxAttempts),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        window: {
            value: cdktf.stringToHclTerraform(struct.window),
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
var ServiceTaskSpecRestartPolicyOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecRestartPolicyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecRestartPolicyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._condition !== undefined) {
                hasAnyValues = true;
                internalValueResult.condition = this._condition;
            }
            if (this._delay !== undefined) {
                hasAnyValues = true;
                internalValueResult.delay = this._delay;
            }
            if (this._maxAttempts !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAttempts = this._maxAttempts;
            }
            if (this._window !== undefined) {
                hasAnyValues = true;
                internalValueResult.window = this._window;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._condition = undefined;
                this._delay = undefined;
                this._maxAttempts = undefined;
                this._window = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._condition = value.condition;
                this._delay = value.delay;
                this._maxAttempts = value.maxAttempts;
                this._window = value.window;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "condition", {
        get: function () {
            return this.getStringAttribute('condition');
        },
        set: function (value) {
            this._condition = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecRestartPolicyOutputReference.prototype.resetCondition = function () {
        this._condition = undefined;
    };
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "delay", {
        get: function () {
            return this.getStringAttribute('delay');
        },
        set: function (value) {
            this._delay = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecRestartPolicyOutputReference.prototype.resetDelay = function () {
        this._delay = undefined;
    };
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "delayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "maxAttempts", {
        get: function () {
            return this.getNumberAttribute('max_attempts');
        },
        set: function (value) {
            this._maxAttempts = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecRestartPolicyOutputReference.prototype.resetMaxAttempts = function () {
        this._maxAttempts = undefined;
    };
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "maxAttemptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAttempts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "window", {
        get: function () {
            return this.getStringAttribute('window');
        },
        set: function (value) {
            this._window = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecRestartPolicyOutputReference.prototype.resetWindow = function () {
        this._window = undefined;
    };
    Object.defineProperty(ServiceTaskSpecRestartPolicyOutputReference.prototype, "windowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._window;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecRestartPolicyOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecRestartPolicyOutputReference = ServiceTaskSpecRestartPolicyOutputReference;
function serviceTaskSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        force_update: cdktf.numberToTerraform(struct.forceUpdate),
        runtime: cdktf.stringToTerraform(struct.runtime),
        container_spec: serviceTaskSpecContainerSpecToTerraform(struct.containerSpec),
        log_driver: serviceTaskSpecLogDriverToTerraform(struct.logDriver),
        networks_advanced: cdktf.listMapper(serviceTaskSpecNetworksAdvancedToTerraform, true)(struct.networksAdvanced),
        placement: serviceTaskSpecPlacementToTerraform(struct.placement),
        resources: serviceTaskSpecResourcesToTerraform(struct.resources),
        restart_policy: serviceTaskSpecRestartPolicyToTerraform(struct.restartPolicy),
    };
}
function serviceTaskSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        force_update: {
            value: cdktf.numberToHclTerraform(struct.forceUpdate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        runtime: {
            value: cdktf.stringToHclTerraform(struct.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_spec: {
            value: serviceTaskSpecContainerSpecToHclTerraform(struct.containerSpec),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecList",
        },
        log_driver: {
            value: serviceTaskSpecLogDriverToHclTerraform(struct.logDriver),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecLogDriverList",
        },
        networks_advanced: {
            value: cdktf.listMapperHcl(serviceTaskSpecNetworksAdvancedToHclTerraform, true)(struct.networksAdvanced),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecNetworksAdvancedList",
        },
        placement: {
            value: serviceTaskSpecPlacementToHclTerraform(struct.placement),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecPlacementList",
        },
        resources: {
            value: serviceTaskSpecResourcesToHclTerraform(struct.resources),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecResourcesList",
        },
        restart_policy: {
            value: serviceTaskSpecRestartPolicyToHclTerraform(struct.restartPolicy),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecRestartPolicyList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ServiceTaskSpecOutputReference = /** @class */ (function (_super) {
    __extends(ServiceTaskSpecOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceTaskSpecOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // container_spec - computed: false, optional: false, required: true
        _this._containerSpec = new ServiceTaskSpecContainerSpecOutputReference(_this, "container_spec");
        // log_driver - computed: false, optional: true, required: false
        _this._logDriver = new ServiceTaskSpecLogDriverOutputReference(_this, "log_driver");
        // networks_advanced - computed: false, optional: true, required: false
        _this._networksAdvanced = new ServiceTaskSpecNetworksAdvancedList(_this, "networks_advanced", true);
        // placement - computed: false, optional: true, required: false
        _this._placement = new ServiceTaskSpecPlacementOutputReference(_this, "placement");
        // resources - computed: false, optional: true, required: false
        _this._resources = new ServiceTaskSpecResourcesOutputReference(_this, "resources");
        // restart_policy - computed: false, optional: true, required: false
        _this._restartPolicy = new ServiceTaskSpecRestartPolicyOutputReference(_this, "restart_policy");
        return _this;
    }
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._forceUpdate !== undefined) {
                hasAnyValues = true;
                internalValueResult.forceUpdate = this._forceUpdate;
            }
            if (this._runtime !== undefined) {
                hasAnyValues = true;
                internalValueResult.runtime = this._runtime;
            }
            if (((_a = this._containerSpec) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.containerSpec = (_b = this._containerSpec) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._logDriver) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.logDriver = (_d = this._logDriver) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._networksAdvanced) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.networksAdvanced = (_f = this._networksAdvanced) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._placement) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.placement = (_h = this._placement) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._resources) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.resources = (_k = this._resources) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._restartPolicy) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.restartPolicy = (_m = this._restartPolicy) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._forceUpdate = undefined;
                this._runtime = undefined;
                this._containerSpec.internalValue = undefined;
                this._logDriver.internalValue = undefined;
                this._networksAdvanced.internalValue = undefined;
                this._placement.internalValue = undefined;
                this._resources.internalValue = undefined;
                this._restartPolicy.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._forceUpdate = value.forceUpdate;
                this._runtime = value.runtime;
                this._containerSpec.internalValue = value.containerSpec;
                this._logDriver.internalValue = value.logDriver;
                this._networksAdvanced.internalValue = value.networksAdvanced;
                this._placement.internalValue = value.placement;
                this._resources.internalValue = value.resources;
                this._restartPolicy.internalValue = value.restartPolicy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "forceUpdate", {
        get: function () {
            return this.getNumberAttribute('force_update');
        },
        set: function (value) {
            this._forceUpdate = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecOutputReference.prototype.resetForceUpdate = function () {
        this._forceUpdate = undefined;
    };
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "forceUpdateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceUpdate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "runtime", {
        get: function () {
            return this.getStringAttribute('runtime');
        },
        set: function (value) {
            this._runtime = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecOutputReference.prototype.resetRuntime = function () {
        this._runtime = undefined;
    };
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "runtimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runtime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "containerSpec", {
        get: function () {
            return this._containerSpec;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecOutputReference.prototype.putContainerSpec = function (value) {
        this._containerSpec.internalValue = value;
    };
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "containerSpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containerSpec.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "logDriver", {
        get: function () {
            return this._logDriver;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecOutputReference.prototype.putLogDriver = function (value) {
        this._logDriver.internalValue = value;
    };
    ServiceTaskSpecOutputReference.prototype.resetLogDriver = function () {
        this._logDriver.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "logDriverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logDriver.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "networksAdvanced", {
        get: function () {
            return this._networksAdvanced;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecOutputReference.prototype.putNetworksAdvanced = function (value) {
        this._networksAdvanced.internalValue = value;
    };
    ServiceTaskSpecOutputReference.prototype.resetNetworksAdvanced = function () {
        this._networksAdvanced.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "networksAdvancedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networksAdvanced.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecOutputReference.prototype.putPlacement = function (value) {
        this._placement.internalValue = value;
    };
    ServiceTaskSpecOutputReference.prototype.resetPlacement = function () {
        this._placement.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "placementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placement.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecOutputReference.prototype.putResources = function (value) {
        this._resources.internalValue = value;
    };
    ServiceTaskSpecOutputReference.prototype.resetResources = function () {
        this._resources.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "resourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resources.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "restartPolicy", {
        get: function () {
            return this._restartPolicy;
        },
        enumerable: false,
        configurable: true
    });
    ServiceTaskSpecOutputReference.prototype.putRestartPolicy = function (value) {
        this._restartPolicy.internalValue = value;
    };
    ServiceTaskSpecOutputReference.prototype.resetRestartPolicy = function () {
        this._restartPolicy.internalValue = undefined;
    };
    Object.defineProperty(ServiceTaskSpecOutputReference.prototype, "restartPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restartPolicy.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceTaskSpecOutputReference;
}(cdktf.ComplexObject));
exports.ServiceTaskSpecOutputReference = ServiceTaskSpecOutputReference;
function serviceUpdateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delay: cdktf.stringToTerraform(struct.delay),
        failure_action: cdktf.stringToTerraform(struct.failureAction),
        max_failure_ratio: cdktf.stringToTerraform(struct.maxFailureRatio),
        monitor: cdktf.stringToTerraform(struct.monitor),
        order: cdktf.stringToTerraform(struct.order),
        parallelism: cdktf.numberToTerraform(struct.parallelism),
    };
}
function serviceUpdateConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        delay: {
            value: cdktf.stringToHclTerraform(struct.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        failure_action: {
            value: cdktf.stringToHclTerraform(struct.failureAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_failure_ratio: {
            value: cdktf.stringToHclTerraform(struct.maxFailureRatio),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitor: {
            value: cdktf.stringToHclTerraform(struct.monitor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallelism: {
            value: cdktf.numberToHclTerraform(struct.parallelism),
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
var ServiceUpdateConfigOutputReference = /** @class */ (function (_super) {
    __extends(ServiceUpdateConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ServiceUpdateConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._delay !== undefined) {
                hasAnyValues = true;
                internalValueResult.delay = this._delay;
            }
            if (this._failureAction !== undefined) {
                hasAnyValues = true;
                internalValueResult.failureAction = this._failureAction;
            }
            if (this._maxFailureRatio !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxFailureRatio = this._maxFailureRatio;
            }
            if (this._monitor !== undefined) {
                hasAnyValues = true;
                internalValueResult.monitor = this._monitor;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._parallelism !== undefined) {
                hasAnyValues = true;
                internalValueResult.parallelism = this._parallelism;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._delay = undefined;
                this._failureAction = undefined;
                this._maxFailureRatio = undefined;
                this._monitor = undefined;
                this._order = undefined;
                this._parallelism = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._delay = value.delay;
                this._failureAction = value.failureAction;
                this._maxFailureRatio = value.maxFailureRatio;
                this._monitor = value.monitor;
                this._order = value.order;
                this._parallelism = value.parallelism;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "delay", {
        get: function () {
            return this.getStringAttribute('delay');
        },
        set: function (value) {
            this._delay = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceUpdateConfigOutputReference.prototype.resetDelay = function () {
        this._delay = undefined;
    };
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "delayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "failureAction", {
        get: function () {
            return this.getStringAttribute('failure_action');
        },
        set: function (value) {
            this._failureAction = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceUpdateConfigOutputReference.prototype.resetFailureAction = function () {
        this._failureAction = undefined;
    };
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "failureActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failureAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "maxFailureRatio", {
        get: function () {
            return this.getStringAttribute('max_failure_ratio');
        },
        set: function (value) {
            this._maxFailureRatio = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceUpdateConfigOutputReference.prototype.resetMaxFailureRatio = function () {
        this._maxFailureRatio = undefined;
    };
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "maxFailureRatioInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFailureRatio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "monitor", {
        get: function () {
            return this.getStringAttribute('monitor');
        },
        set: function (value) {
            this._monitor = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceUpdateConfigOutputReference.prototype.resetMonitor = function () {
        this._monitor = undefined;
    };
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "monitorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceUpdateConfigOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "parallelism", {
        get: function () {
            return this.getNumberAttribute('parallelism');
        },
        set: function (value) {
            this._parallelism = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceUpdateConfigOutputReference.prototype.resetParallelism = function () {
        this._parallelism = undefined;
    };
    Object.defineProperty(ServiceUpdateConfigOutputReference.prototype, "parallelismInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parallelism;
        },
        enumerable: false,
        configurable: true
    });
    return ServiceUpdateConfigOutputReference;
}(cdktf.ComplexObject));
exports.ServiceUpdateConfigOutputReference = ServiceUpdateConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service docker_service}
*/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service docker_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceConfig
    */
    function Service(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_service',
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
        // auth - computed: false, optional: true, required: false
        _this._auth = new ServiceAuthOutputReference(_this, "auth");
        // converge_config - computed: false, optional: true, required: false
        _this._convergeConfig = new ServiceConvergeConfigOutputReference(_this, "converge_config");
        // endpoint_spec - computed: false, optional: true, required: false
        _this._endpointSpec = new ServiceEndpointSpecOutputReference(_this, "endpoint_spec");
        // labels - computed: false, optional: true, required: false
        _this._labels = new ServiceLabelsList(_this, "labels", true);
        // mode - computed: false, optional: true, required: false
        _this._mode = new ServiceModeOutputReference(_this, "mode");
        // rollback_config - computed: false, optional: true, required: false
        _this._rollbackConfig = new ServiceRollbackConfigOutputReference(_this, "rollback_config");
        // task_spec - computed: false, optional: false, required: true
        _this._taskSpec = new ServiceTaskSpecOutputReference(_this, "task_spec");
        // update_config - computed: false, optional: true, required: false
        _this._updateConfig = new ServiceUpdateConfigOutputReference(_this, "update_config");
        _this._id = config.id;
        _this._name = config.name;
        _this._auth.internalValue = config.auth;
        _this._convergeConfig.internalValue = config.convergeConfig;
        _this._endpointSpec.internalValue = config.endpointSpec;
        _this._labels.internalValue = config.labels;
        _this._mode.internalValue = config.mode;
        _this._rollbackConfig.internalValue = config.rollbackConfig;
        _this._taskSpec.internalValue = config.taskSpec;
        _this._updateConfig.internalValue = config.updateConfig;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Service to import
    * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Service to import is found
    */
    Service.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_service", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Service.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Service.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "auth", {
        get: function () {
            return this._auth;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.putAuth = function (value) {
        this._auth.internalValue = value;
    };
    Service.prototype.resetAuth = function () {
        this._auth.internalValue = undefined;
    };
    Object.defineProperty(Service.prototype, "authInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auth.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "convergeConfig", {
        get: function () {
            return this._convergeConfig;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.putConvergeConfig = function (value) {
        this._convergeConfig.internalValue = value;
    };
    Service.prototype.resetConvergeConfig = function () {
        this._convergeConfig.internalValue = undefined;
    };
    Object.defineProperty(Service.prototype, "convergeConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._convergeConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "endpointSpec", {
        get: function () {
            return this._endpointSpec;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.putEndpointSpec = function (value) {
        this._endpointSpec.internalValue = value;
    };
    Service.prototype.resetEndpointSpec = function () {
        this._endpointSpec.internalValue = undefined;
    };
    Object.defineProperty(Service.prototype, "endpointSpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointSpec.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.putLabels = function (value) {
        this._labels.internalValue = value;
    };
    Service.prototype.resetLabels = function () {
        this._labels.internalValue = undefined;
    };
    Object.defineProperty(Service.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.putMode = function (value) {
        this._mode.internalValue = value;
    };
    Service.prototype.resetMode = function () {
        this._mode.internalValue = undefined;
    };
    Object.defineProperty(Service.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "rollbackConfig", {
        get: function () {
            return this._rollbackConfig;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.putRollbackConfig = function (value) {
        this._rollbackConfig.internalValue = value;
    };
    Service.prototype.resetRollbackConfig = function () {
        this._rollbackConfig.internalValue = undefined;
    };
    Object.defineProperty(Service.prototype, "rollbackConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rollbackConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "taskSpec", {
        get: function () {
            return this._taskSpec;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.putTaskSpec = function (value) {
        this._taskSpec.internalValue = value;
    };
    Object.defineProperty(Service.prototype, "taskSpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taskSpec.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "updateConfig", {
        get: function () {
            return this._updateConfig;
        },
        enumerable: false,
        configurable: true
    });
    Service.prototype.putUpdateConfig = function (value) {
        this._updateConfig.internalValue = value;
    };
    Service.prototype.resetUpdateConfig = function () {
        this._updateConfig.internalValue = undefined;
    };
    Object.defineProperty(Service.prototype, "updateConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updateConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Service.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            auth: serviceAuthToTerraform(this._auth.internalValue),
            converge_config: serviceConvergeConfigToTerraform(this._convergeConfig.internalValue),
            endpoint_spec: serviceEndpointSpecToTerraform(this._endpointSpec.internalValue),
            labels: cdktf.listMapper(serviceLabelsToTerraform, true)(this._labels.internalValue),
            mode: serviceModeToTerraform(this._mode.internalValue),
            rollback_config: serviceRollbackConfigToTerraform(this._rollbackConfig.internalValue),
            task_spec: serviceTaskSpecToTerraform(this._taskSpec.internalValue),
            update_config: serviceUpdateConfigToTerraform(this._updateConfig.internalValue),
        };
    };
    Service.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth: {
                value: serviceAuthToHclTerraform(this._auth.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceAuthList",
            },
            converge_config: {
                value: serviceConvergeConfigToHclTerraform(this._convergeConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceConvergeConfigList",
            },
            endpoint_spec: {
                value: serviceEndpointSpecToHclTerraform(this._endpointSpec.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceEndpointSpecList",
            },
            labels: {
                value: cdktf.listMapperHcl(serviceLabelsToHclTerraform, true)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ServiceLabelsList",
            },
            mode: {
                value: serviceModeToHclTerraform(this._mode.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceModeList",
            },
            rollback_config: {
                value: serviceRollbackConfigToHclTerraform(this._rollbackConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceRollbackConfigList",
            },
            task_spec: {
                value: serviceTaskSpecToHclTerraform(this._taskSpec.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceTaskSpecList",
            },
            update_config: {
                value: serviceUpdateConfigToHclTerraform(this._updateConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceUpdateConfigList",
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
    Service.tfResourceType = "docker_service";
    return Service;
}(cdktf.TerraformResource));
exports.Service = Service;
