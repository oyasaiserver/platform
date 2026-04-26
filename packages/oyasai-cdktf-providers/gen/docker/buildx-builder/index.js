"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder
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
exports.BuildxBuilder = exports.BuildxBuilderRemoteOutputReference = exports.BuildxBuilderKubernetesOutputReference = exports.BuildxBuilderKubernetesRequestsOutputReference = exports.BuildxBuilderKubernetesQemuOutputReference = exports.BuildxBuilderKubernetesLimitsOutputReference = exports.BuildxBuilderDockerContainerOutputReference = void 0;
exports.buildxBuilderDockerContainerToTerraform = buildxBuilderDockerContainerToTerraform;
exports.buildxBuilderDockerContainerToHclTerraform = buildxBuilderDockerContainerToHclTerraform;
exports.buildxBuilderKubernetesLimitsToTerraform = buildxBuilderKubernetesLimitsToTerraform;
exports.buildxBuilderKubernetesLimitsToHclTerraform = buildxBuilderKubernetesLimitsToHclTerraform;
exports.buildxBuilderKubernetesQemuToTerraform = buildxBuilderKubernetesQemuToTerraform;
exports.buildxBuilderKubernetesQemuToHclTerraform = buildxBuilderKubernetesQemuToHclTerraform;
exports.buildxBuilderKubernetesRequestsToTerraform = buildxBuilderKubernetesRequestsToTerraform;
exports.buildxBuilderKubernetesRequestsToHclTerraform = buildxBuilderKubernetesRequestsToHclTerraform;
exports.buildxBuilderKubernetesToTerraform = buildxBuilderKubernetesToTerraform;
exports.buildxBuilderKubernetesToHclTerraform = buildxBuilderKubernetesToHclTerraform;
exports.buildxBuilderRemoteToTerraform = buildxBuilderRemoteToTerraform;
exports.buildxBuilderRemoteToHclTerraform = buildxBuilderRemoteToHclTerraform;
var cdktf = require("cdktf");
function buildxBuilderDockerContainerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cgroup_parent: cdktf.stringToTerraform(struct.cgroupParent),
        cpu_period: cdktf.stringToTerraform(struct.cpuPeriod),
        cpu_quota: cdktf.stringToTerraform(struct.cpuQuota),
        cpu_shares: cdktf.stringToTerraform(struct.cpuShares),
        cpuset_cpus: cdktf.stringToTerraform(struct.cpusetCpus),
        cpuset_mems: cdktf.stringToTerraform(struct.cpusetMems),
        default_load: cdktf.booleanToTerraform(struct.defaultLoad),
        env: cdktf.hashMapper(cdktf.stringToTerraform)(struct.env),
        image: cdktf.stringToTerraform(struct.image),
        memory: cdktf.stringToTerraform(struct.memory),
        memory_swap: cdktf.stringToTerraform(struct.memorySwap),
        network: cdktf.stringToTerraform(struct.network),
        restart_policy: cdktf.stringToTerraform(struct.restartPolicy),
    };
}
function buildxBuilderDockerContainerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cgroup_parent: {
            value: cdktf.stringToHclTerraform(struct.cgroupParent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_period: {
            value: cdktf.stringToHclTerraform(struct.cpuPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_quota: {
            value: cdktf.stringToHclTerraform(struct.cpuQuota),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_shares: {
            value: cdktf.stringToHclTerraform(struct.cpuShares),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpuset_cpus: {
            value: cdktf.stringToHclTerraform(struct.cpusetCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpuset_mems: {
            value: cdktf.stringToHclTerraform(struct.cpusetMems),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_load: {
            value: cdktf.booleanToHclTerraform(struct.defaultLoad),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        env: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.env),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        image: {
            value: cdktf.stringToHclTerraform(struct.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory: {
            value: cdktf.stringToHclTerraform(struct.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_swap: {
            value: cdktf.stringToHclTerraform(struct.memorySwap),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        restart_policy: {
            value: cdktf.stringToHclTerraform(struct.restartPolicy),
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
var BuildxBuilderDockerContainerOutputReference = /** @class */ (function (_super) {
    __extends(BuildxBuilderDockerContainerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BuildxBuilderDockerContainerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cgroupParent !== undefined) {
                hasAnyValues = true;
                internalValueResult.cgroupParent = this._cgroupParent;
            }
            if (this._cpuPeriod !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuPeriod = this._cpuPeriod;
            }
            if (this._cpuQuota !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuQuota = this._cpuQuota;
            }
            if (this._cpuShares !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuShares = this._cpuShares;
            }
            if (this._cpusetCpus !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpusetCpus = this._cpusetCpus;
            }
            if (this._cpusetMems !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpusetMems = this._cpusetMems;
            }
            if (this._defaultLoad !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultLoad = this._defaultLoad;
            }
            if (this._env !== undefined) {
                hasAnyValues = true;
                internalValueResult.env = this._env;
            }
            if (this._image !== undefined) {
                hasAnyValues = true;
                internalValueResult.image = this._image;
            }
            if (this._memory !== undefined) {
                hasAnyValues = true;
                internalValueResult.memory = this._memory;
            }
            if (this._memorySwap !== undefined) {
                hasAnyValues = true;
                internalValueResult.memorySwap = this._memorySwap;
            }
            if (this._network !== undefined) {
                hasAnyValues = true;
                internalValueResult.network = this._network;
            }
            if (this._restartPolicy !== undefined) {
                hasAnyValues = true;
                internalValueResult.restartPolicy = this._restartPolicy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._cgroupParent = undefined;
                this._cpuPeriod = undefined;
                this._cpuQuota = undefined;
                this._cpuShares = undefined;
                this._cpusetCpus = undefined;
                this._cpusetMems = undefined;
                this._defaultLoad = undefined;
                this._env = undefined;
                this._image = undefined;
                this._memory = undefined;
                this._memorySwap = undefined;
                this._network = undefined;
                this._restartPolicy = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._cgroupParent = value.cgroupParent;
                this._cpuPeriod = value.cpuPeriod;
                this._cpuQuota = value.cpuQuota;
                this._cpuShares = value.cpuShares;
                this._cpusetCpus = value.cpusetCpus;
                this._cpusetMems = value.cpusetMems;
                this._defaultLoad = value.defaultLoad;
                this._env = value.env;
                this._image = value.image;
                this._memory = value.memory;
                this._memorySwap = value.memorySwap;
                this._network = value.network;
                this._restartPolicy = value.restartPolicy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cgroupParent", {
        get: function () {
            return this.getStringAttribute('cgroup_parent');
        },
        set: function (value) {
            this._cgroupParent = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetCgroupParent = function () {
        this._cgroupParent = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cgroupParentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cgroupParent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpuPeriod", {
        get: function () {
            return this.getStringAttribute('cpu_period');
        },
        set: function (value) {
            this._cpuPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetCpuPeriod = function () {
        this._cpuPeriod = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpuPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpuQuota", {
        get: function () {
            return this.getStringAttribute('cpu_quota');
        },
        set: function (value) {
            this._cpuQuota = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetCpuQuota = function () {
        this._cpuQuota = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpuQuotaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuQuota;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpuShares", {
        get: function () {
            return this.getStringAttribute('cpu_shares');
        },
        set: function (value) {
            this._cpuShares = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetCpuShares = function () {
        this._cpuShares = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpuSharesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuShares;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpusetCpus", {
        get: function () {
            return this.getStringAttribute('cpuset_cpus');
        },
        set: function (value) {
            this._cpusetCpus = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetCpusetCpus = function () {
        this._cpusetCpus = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpusetCpusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpusetCpus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpusetMems", {
        get: function () {
            return this.getStringAttribute('cpuset_mems');
        },
        set: function (value) {
            this._cpusetMems = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetCpusetMems = function () {
        this._cpusetMems = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "cpusetMemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpusetMems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "defaultLoad", {
        get: function () {
            return this.getBooleanAttribute('default_load');
        },
        set: function (value) {
            this._defaultLoad = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetDefaultLoad = function () {
        this._defaultLoad = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "defaultLoadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultLoad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "env", {
        get: function () {
            return this.getStringMapAttribute('env');
        },
        set: function (value) {
            this._env = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetEnv = function () {
        this._env = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "envInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._env;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "image", {
        get: function () {
            return this.getStringAttribute('image');
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetImage = function () {
        this._image = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "imageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "memory", {
        get: function () {
            return this.getStringAttribute('memory');
        },
        set: function (value) {
            this._memory = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetMemory = function () {
        this._memory = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "memoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "memorySwap", {
        get: function () {
            return this.getStringAttribute('memory_swap');
        },
        set: function (value) {
            this._memorySwap = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetMemorySwap = function () {
        this._memorySwap = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "memorySwapInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memorySwap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "network", {
        get: function () {
            return this.getStringAttribute('network');
        },
        set: function (value) {
            this._network = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetNetwork = function () {
        this._network = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "networkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "restartPolicy", {
        get: function () {
            return this.getStringAttribute('restart_policy');
        },
        set: function (value) {
            this._restartPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderDockerContainerOutputReference.prototype.resetRestartPolicy = function () {
        this._restartPolicy = undefined;
    };
    Object.defineProperty(BuildxBuilderDockerContainerOutputReference.prototype, "restartPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restartPolicy;
        },
        enumerable: false,
        configurable: true
    });
    return BuildxBuilderDockerContainerOutputReference;
}(cdktf.ComplexObject));
exports.BuildxBuilderDockerContainerOutputReference = BuildxBuilderDockerContainerOutputReference;
function buildxBuilderKubernetesLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu: cdktf.stringToTerraform(struct.cpu),
        ephemeral_storage: cdktf.stringToTerraform(struct.ephemeralStorage),
        memory: cdktf.stringToTerraform(struct.memory),
    };
}
function buildxBuilderKubernetesLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cpu: {
            value: cdktf.stringToHclTerraform(struct.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ephemeral_storage: {
            value: cdktf.stringToHclTerraform(struct.ephemeralStorage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory: {
            value: cdktf.stringToHclTerraform(struct.memory),
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
var BuildxBuilderKubernetesLimitsOutputReference = /** @class */ (function (_super) {
    __extends(BuildxBuilderKubernetesLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BuildxBuilderKubernetesLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BuildxBuilderKubernetesLimitsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cpu !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpu = this._cpu;
            }
            if (this._ephemeralStorage !== undefined) {
                hasAnyValues = true;
                internalValueResult.ephemeralStorage = this._ephemeralStorage;
            }
            if (this._memory !== undefined) {
                hasAnyValues = true;
                internalValueResult.memory = this._memory;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._cpu = undefined;
                this._ephemeralStorage = undefined;
                this._memory = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._cpu = value.cpu;
                this._ephemeralStorage = value.ephemeralStorage;
                this._memory = value.memory;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesLimitsOutputReference.prototype, "cpu", {
        get: function () {
            return this.getStringAttribute('cpu');
        },
        set: function (value) {
            this._cpu = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesLimitsOutputReference.prototype.resetCpu = function () {
        this._cpu = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesLimitsOutputReference.prototype, "cpuInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesLimitsOutputReference.prototype, "ephemeralStorage", {
        get: function () {
            return this.getStringAttribute('ephemeral_storage');
        },
        set: function (value) {
            this._ephemeralStorage = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesLimitsOutputReference.prototype.resetEphemeralStorage = function () {
        this._ephemeralStorage = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesLimitsOutputReference.prototype, "ephemeralStorageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesLimitsOutputReference.prototype, "memory", {
        get: function () {
            return this.getStringAttribute('memory');
        },
        set: function (value) {
            this._memory = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesLimitsOutputReference.prototype.resetMemory = function () {
        this._memory = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesLimitsOutputReference.prototype, "memoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memory;
        },
        enumerable: false,
        configurable: true
    });
    return BuildxBuilderKubernetesLimitsOutputReference;
}(cdktf.ComplexObject));
exports.BuildxBuilderKubernetesLimitsOutputReference = BuildxBuilderKubernetesLimitsOutputReference;
function buildxBuilderKubernetesQemuToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        image: cdktf.stringToTerraform(struct.image),
        install: cdktf.booleanToTerraform(struct.install),
    };
}
function buildxBuilderKubernetesQemuToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        image: {
            value: cdktf.stringToHclTerraform(struct.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        install: {
            value: cdktf.booleanToHclTerraform(struct.install),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var BuildxBuilderKubernetesQemuOutputReference = /** @class */ (function (_super) {
    __extends(BuildxBuilderKubernetesQemuOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BuildxBuilderKubernetesQemuOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BuildxBuilderKubernetesQemuOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._image !== undefined) {
                hasAnyValues = true;
                internalValueResult.image = this._image;
            }
            if (this._install !== undefined) {
                hasAnyValues = true;
                internalValueResult.install = this._install;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._image = undefined;
                this._install = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._image = value.image;
                this._install = value.install;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesQemuOutputReference.prototype, "image", {
        get: function () {
            return this.getStringAttribute('image');
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesQemuOutputReference.prototype.resetImage = function () {
        this._image = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesQemuOutputReference.prototype, "imageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesQemuOutputReference.prototype, "install", {
        get: function () {
            return this.getBooleanAttribute('install');
        },
        set: function (value) {
            this._install = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesQemuOutputReference.prototype.resetInstall = function () {
        this._install = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesQemuOutputReference.prototype, "installInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._install;
        },
        enumerable: false,
        configurable: true
    });
    return BuildxBuilderKubernetesQemuOutputReference;
}(cdktf.ComplexObject));
exports.BuildxBuilderKubernetesQemuOutputReference = BuildxBuilderKubernetesQemuOutputReference;
function buildxBuilderKubernetesRequestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu: cdktf.stringToTerraform(struct.cpu),
        ephemeral_storage: cdktf.stringToTerraform(struct.ephemeralStorage),
        memory: cdktf.stringToTerraform(struct.memory),
    };
}
function buildxBuilderKubernetesRequestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cpu: {
            value: cdktf.stringToHclTerraform(struct.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ephemeral_storage: {
            value: cdktf.stringToHclTerraform(struct.ephemeralStorage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory: {
            value: cdktf.stringToHclTerraform(struct.memory),
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
var BuildxBuilderKubernetesRequestsOutputReference = /** @class */ (function (_super) {
    __extends(BuildxBuilderKubernetesRequestsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BuildxBuilderKubernetesRequestsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BuildxBuilderKubernetesRequestsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cpu !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpu = this._cpu;
            }
            if (this._ephemeralStorage !== undefined) {
                hasAnyValues = true;
                internalValueResult.ephemeralStorage = this._ephemeralStorage;
            }
            if (this._memory !== undefined) {
                hasAnyValues = true;
                internalValueResult.memory = this._memory;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._cpu = undefined;
                this._ephemeralStorage = undefined;
                this._memory = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._cpu = value.cpu;
                this._ephemeralStorage = value.ephemeralStorage;
                this._memory = value.memory;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesRequestsOutputReference.prototype, "cpu", {
        get: function () {
            return this.getStringAttribute('cpu');
        },
        set: function (value) {
            this._cpu = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesRequestsOutputReference.prototype.resetCpu = function () {
        this._cpu = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesRequestsOutputReference.prototype, "cpuInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesRequestsOutputReference.prototype, "ephemeralStorage", {
        get: function () {
            return this.getStringAttribute('ephemeral_storage');
        },
        set: function (value) {
            this._ephemeralStorage = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesRequestsOutputReference.prototype.resetEphemeralStorage = function () {
        this._ephemeralStorage = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesRequestsOutputReference.prototype, "ephemeralStorageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesRequestsOutputReference.prototype, "memory", {
        get: function () {
            return this.getStringAttribute('memory');
        },
        set: function (value) {
            this._memory = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesRequestsOutputReference.prototype.resetMemory = function () {
        this._memory = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesRequestsOutputReference.prototype, "memoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memory;
        },
        enumerable: false,
        configurable: true
    });
    return BuildxBuilderKubernetesRequestsOutputReference;
}(cdktf.ComplexObject));
exports.BuildxBuilderKubernetesRequestsOutputReference = BuildxBuilderKubernetesRequestsOutputReference;
function buildxBuilderKubernetesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        annotations: cdktf.stringToTerraform(struct.annotations),
        default_load: cdktf.booleanToTerraform(struct.defaultLoad),
        image: cdktf.stringToTerraform(struct.image),
        labels: cdktf.stringToTerraform(struct.labels),
        loadbalance: cdktf.stringToTerraform(struct.loadbalance),
        namespace: cdktf.stringToTerraform(struct.namespace),
        nodeselector: cdktf.stringToTerraform(struct.nodeselector),
        replicas: cdktf.numberToTerraform(struct.replicas),
        rootless: cdktf.booleanToTerraform(struct.rootless),
        schedulername: cdktf.stringToTerraform(struct.schedulername),
        serviceaccount: cdktf.stringToTerraform(struct.serviceaccount),
        timeout: cdktf.stringToTerraform(struct.timeout),
        tolerations: cdktf.stringToTerraform(struct.tolerations),
        limits: buildxBuilderKubernetesLimitsToTerraform(struct.limits),
        qemu: buildxBuilderKubernetesQemuToTerraform(struct.qemu),
        requests: buildxBuilderKubernetesRequestsToTerraform(struct.requests),
    };
}
function buildxBuilderKubernetesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        annotations: {
            value: cdktf.stringToHclTerraform(struct.annotations),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_load: {
            value: cdktf.booleanToHclTerraform(struct.defaultLoad),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        image: {
            value: cdktf.stringToHclTerraform(struct.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        labels: {
            value: cdktf.stringToHclTerraform(struct.labels),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        loadbalance: {
            value: cdktf.stringToHclTerraform(struct.loadbalance),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nodeselector: {
            value: cdktf.stringToHclTerraform(struct.nodeselector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replicas: {
            value: cdktf.numberToHclTerraform(struct.replicas),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rootless: {
            value: cdktf.booleanToHclTerraform(struct.rootless),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        schedulername: {
            value: cdktf.stringToHclTerraform(struct.schedulername),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serviceaccount: {
            value: cdktf.stringToHclTerraform(struct.serviceaccount),
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
        tolerations: {
            value: cdktf.stringToHclTerraform(struct.tolerations),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        limits: {
            value: buildxBuilderKubernetesLimitsToHclTerraform(struct.limits),
            isBlock: true,
            type: "list",
            storageClassType: "BuildxBuilderKubernetesLimitsList",
        },
        qemu: {
            value: buildxBuilderKubernetesQemuToHclTerraform(struct.qemu),
            isBlock: true,
            type: "list",
            storageClassType: "BuildxBuilderKubernetesQemuList",
        },
        requests: {
            value: buildxBuilderKubernetesRequestsToHclTerraform(struct.requests),
            isBlock: true,
            type: "list",
            storageClassType: "BuildxBuilderKubernetesRequestsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var BuildxBuilderKubernetesOutputReference = /** @class */ (function (_super) {
    __extends(BuildxBuilderKubernetesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BuildxBuilderKubernetesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // limits - computed: false, optional: true, required: false
        _this._limits = new BuildxBuilderKubernetesLimitsOutputReference(_this, "limits");
        // qemu - computed: false, optional: true, required: false
        _this._qemu = new BuildxBuilderKubernetesQemuOutputReference(_this, "qemu");
        // requests - computed: false, optional: true, required: false
        _this._requests = new BuildxBuilderKubernetesRequestsOutputReference(_this, "requests");
        return _this;
    }
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._annotations !== undefined) {
                hasAnyValues = true;
                internalValueResult.annotations = this._annotations;
            }
            if (this._defaultLoad !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultLoad = this._defaultLoad;
            }
            if (this._image !== undefined) {
                hasAnyValues = true;
                internalValueResult.image = this._image;
            }
            if (this._labels !== undefined) {
                hasAnyValues = true;
                internalValueResult.labels = this._labels;
            }
            if (this._loadbalance !== undefined) {
                hasAnyValues = true;
                internalValueResult.loadbalance = this._loadbalance;
            }
            if (this._namespace !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespace = this._namespace;
            }
            if (this._nodeselector !== undefined) {
                hasAnyValues = true;
                internalValueResult.nodeselector = this._nodeselector;
            }
            if (this._replicas !== undefined) {
                hasAnyValues = true;
                internalValueResult.replicas = this._replicas;
            }
            if (this._rootless !== undefined) {
                hasAnyValues = true;
                internalValueResult.rootless = this._rootless;
            }
            if (this._schedulername !== undefined) {
                hasAnyValues = true;
                internalValueResult.schedulername = this._schedulername;
            }
            if (this._serviceaccount !== undefined) {
                hasAnyValues = true;
                internalValueResult.serviceaccount = this._serviceaccount;
            }
            if (this._timeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.timeout = this._timeout;
            }
            if (this._tolerations !== undefined) {
                hasAnyValues = true;
                internalValueResult.tolerations = this._tolerations;
            }
            if (((_a = this._limits) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.limits = (_b = this._limits) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._qemu) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.qemu = (_d = this._qemu) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._requests) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requests = (_f = this._requests) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._annotations = undefined;
                this._defaultLoad = undefined;
                this._image = undefined;
                this._labels = undefined;
                this._loadbalance = undefined;
                this._namespace = undefined;
                this._nodeselector = undefined;
                this._replicas = undefined;
                this._rootless = undefined;
                this._schedulername = undefined;
                this._serviceaccount = undefined;
                this._timeout = undefined;
                this._tolerations = undefined;
                this._limits.internalValue = undefined;
                this._qemu.internalValue = undefined;
                this._requests.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._annotations = value.annotations;
                this._defaultLoad = value.defaultLoad;
                this._image = value.image;
                this._labels = value.labels;
                this._loadbalance = value.loadbalance;
                this._namespace = value.namespace;
                this._nodeselector = value.nodeselector;
                this._replicas = value.replicas;
                this._rootless = value.rootless;
                this._schedulername = value.schedulername;
                this._serviceaccount = value.serviceaccount;
                this._timeout = value.timeout;
                this._tolerations = value.tolerations;
                this._limits.internalValue = value.limits;
                this._qemu.internalValue = value.qemu;
                this._requests.internalValue = value.requests;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "annotations", {
        get: function () {
            return this.getStringAttribute('annotations');
        },
        set: function (value) {
            this._annotations = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetAnnotations = function () {
        this._annotations = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "annotationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._annotations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "defaultLoad", {
        get: function () {
            return this.getBooleanAttribute('default_load');
        },
        set: function (value) {
            this._defaultLoad = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetDefaultLoad = function () {
        this._defaultLoad = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "defaultLoadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultLoad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "image", {
        get: function () {
            return this.getStringAttribute('image');
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetImage = function () {
        this._image = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "imageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "labels", {
        get: function () {
            return this.getStringAttribute('labels');
        },
        set: function (value) {
            this._labels = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetLabels = function () {
        this._labels = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "loadbalance", {
        get: function () {
            return this.getStringAttribute('loadbalance');
        },
        set: function (value) {
            this._loadbalance = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetLoadbalance = function () {
        this._loadbalance = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "loadbalanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadbalance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "nodeselector", {
        get: function () {
            return this.getStringAttribute('nodeselector');
        },
        set: function (value) {
            this._nodeselector = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetNodeselector = function () {
        this._nodeselector = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "nodeselectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeselector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "replicas", {
        get: function () {
            return this.getNumberAttribute('replicas');
        },
        set: function (value) {
            this._replicas = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetReplicas = function () {
        this._replicas = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "replicasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "rootless", {
        get: function () {
            return this.getBooleanAttribute('rootless');
        },
        set: function (value) {
            this._rootless = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetRootless = function () {
        this._rootless = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "rootlessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootless;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "schedulername", {
        get: function () {
            return this.getStringAttribute('schedulername');
        },
        set: function (value) {
            this._schedulername = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetSchedulername = function () {
        this._schedulername = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "schedulernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedulername;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "serviceaccount", {
        get: function () {
            return this.getStringAttribute('serviceaccount');
        },
        set: function (value) {
            this._serviceaccount = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetServiceaccount = function () {
        this._serviceaccount = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "serviceaccountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceaccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "timeout", {
        get: function () {
            return this.getStringAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "tolerations", {
        get: function () {
            return this.getStringAttribute('tolerations');
        },
        set: function (value) {
            this._tolerations = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.resetTolerations = function () {
        this._tolerations = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "tolerationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tolerations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.putLimits = function (value) {
        this._limits.internalValue = value;
    };
    BuildxBuilderKubernetesOutputReference.prototype.resetLimits = function () {
        this._limits.internalValue = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "limitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limits.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "qemu", {
        get: function () {
            return this._qemu;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.putQemu = function (value) {
        this._qemu.internalValue = value;
    };
    BuildxBuilderKubernetesOutputReference.prototype.resetQemu = function () {
        this._qemu.internalValue = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "qemuInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._qemu.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "requests", {
        get: function () {
            return this._requests;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderKubernetesOutputReference.prototype.putRequests = function (value) {
        this._requests.internalValue = value;
    };
    BuildxBuilderKubernetesOutputReference.prototype.resetRequests = function () {
        this._requests.internalValue = undefined;
    };
    Object.defineProperty(BuildxBuilderKubernetesOutputReference.prototype, "requestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requests.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return BuildxBuilderKubernetesOutputReference;
}(cdktf.ComplexObject));
exports.BuildxBuilderKubernetesOutputReference = BuildxBuilderKubernetesOutputReference;
function buildxBuilderRemoteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cacert: cdktf.stringToTerraform(struct.cacert),
        cert: cdktf.stringToTerraform(struct.cert),
        default_load: cdktf.booleanToTerraform(struct.defaultLoad),
        key: cdktf.stringToTerraform(struct.key),
        servername: cdktf.stringToTerraform(struct.servername),
    };
}
function buildxBuilderRemoteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cacert: {
            value: cdktf.stringToHclTerraform(struct.cacert),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cert: {
            value: cdktf.stringToHclTerraform(struct.cert),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_load: {
            value: cdktf.booleanToHclTerraform(struct.defaultLoad),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        servername: {
            value: cdktf.stringToHclTerraform(struct.servername),
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
var BuildxBuilderRemoteOutputReference = /** @class */ (function (_super) {
    __extends(BuildxBuilderRemoteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BuildxBuilderRemoteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cacert !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacert = this._cacert;
            }
            if (this._cert !== undefined) {
                hasAnyValues = true;
                internalValueResult.cert = this._cert;
            }
            if (this._defaultLoad !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultLoad = this._defaultLoad;
            }
            if (this._key !== undefined) {
                hasAnyValues = true;
                internalValueResult.key = this._key;
            }
            if (this._servername !== undefined) {
                hasAnyValues = true;
                internalValueResult.servername = this._servername;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._cacert = undefined;
                this._cert = undefined;
                this._defaultLoad = undefined;
                this._key = undefined;
                this._servername = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._cacert = value.cacert;
                this._cert = value.cert;
                this._defaultLoad = value.defaultLoad;
                this._key = value.key;
                this._servername = value.servername;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "cacert", {
        get: function () {
            return this.getStringAttribute('cacert');
        },
        set: function (value) {
            this._cacert = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderRemoteOutputReference.prototype.resetCacert = function () {
        this._cacert = undefined;
    };
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "cacertInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacert;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "cert", {
        get: function () {
            return this.getStringAttribute('cert');
        },
        set: function (value) {
            this._cert = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderRemoteOutputReference.prototype.resetCert = function () {
        this._cert = undefined;
    };
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "certInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cert;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "defaultLoad", {
        get: function () {
            return this.getBooleanAttribute('default_load');
        },
        set: function (value) {
            this._defaultLoad = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderRemoteOutputReference.prototype.resetDefaultLoad = function () {
        this._defaultLoad = undefined;
    };
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "defaultLoadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultLoad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderRemoteOutputReference.prototype.resetKey = function () {
        this._key = undefined;
    };
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "servername", {
        get: function () {
            return this.getStringAttribute('servername');
        },
        set: function (value) {
            this._servername = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilderRemoteOutputReference.prototype.resetServername = function () {
        this._servername = undefined;
    };
    Object.defineProperty(BuildxBuilderRemoteOutputReference.prototype, "servernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._servername;
        },
        enumerable: false,
        configurable: true
    });
    return BuildxBuilderRemoteOutputReference;
}(cdktf.ComplexObject));
exports.BuildxBuilderRemoteOutputReference = BuildxBuilderRemoteOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder docker_buildx_builder}
*/
var BuildxBuilder = /** @class */ (function (_super) {
    __extends(BuildxBuilder, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder docker_buildx_builder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BuildxBuilderConfig = {}
    */
    function BuildxBuilder(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_buildx_builder',
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
        // docker_container - computed: false, optional: true, required: false
        _this._dockerContainer = new BuildxBuilderDockerContainerOutputReference(_this, "docker_container");
        // kubernetes - computed: false, optional: true, required: false
        _this._kubernetes = new BuildxBuilderKubernetesOutputReference(_this, "kubernetes");
        // remote - computed: false, optional: true, required: false
        _this._remote = new BuildxBuilderRemoteOutputReference(_this, "remote");
        _this._append = config.append;
        _this._bootstrap = config.bootstrap;
        _this._buildkitConfig = config.buildkitConfig;
        _this._buildkitFlags = config.buildkitFlags;
        _this._driver = config.driver;
        _this._driverOptions = config.driverOptions;
        _this._endpoint = config.endpoint;
        _this._id = config.id;
        _this._name = config.name;
        _this._node = config.nodeAttribute;
        _this._platform = config.platform;
        _this._use = config.use;
        _this._dockerContainer.internalValue = config.dockerContainer;
        _this._kubernetes.internalValue = config.kubernetes;
        _this._remote.internalValue = config.remote;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BuildxBuilder to import
    * @param importFromId The id of the existing BuildxBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BuildxBuilder to import is found
    */
    BuildxBuilder.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_buildx_builder", importId: importFromId, provider: provider });
    };
    Object.defineProperty(BuildxBuilder.prototype, "append", {
        get: function () {
            return this.getBooleanAttribute('append');
        },
        set: function (value) {
            this._append = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetAppend = function () {
        this._append = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "appendInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._append;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "bootstrap", {
        get: function () {
            return this.getBooleanAttribute('bootstrap');
        },
        set: function (value) {
            this._bootstrap = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetBootstrap = function () {
        this._bootstrap = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "bootstrapInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bootstrap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "buildkitConfig", {
        get: function () {
            return this.getStringAttribute('buildkit_config');
        },
        set: function (value) {
            this._buildkitConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetBuildkitConfig = function () {
        this._buildkitConfig = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "buildkitConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildkitConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "buildkitFlags", {
        get: function () {
            return this.getStringAttribute('buildkit_flags');
        },
        set: function (value) {
            this._buildkitFlags = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetBuildkitFlags = function () {
        this._buildkitFlags = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "buildkitFlagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildkitFlags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "driver", {
        get: function () {
            return this.getStringAttribute('driver');
        },
        set: function (value) {
            this._driver = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetDriver = function () {
        this._driver = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "driverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "driverOptions", {
        get: function () {
            return this.getStringMapAttribute('driver_options');
        },
        set: function (value) {
            this._driverOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetDriverOptions = function () {
        this._driverOptions = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "driverOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driverOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "endpoint", {
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetEndpoint = function () {
        this._endpoint = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "nodeAttribute", {
        get: function () {
            return this.getStringAttribute('node');
        },
        set: function (value) {
            this._node = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetNodeAttribute = function () {
        this._node = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "nodeAttributeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "platform", {
        get: function () {
            return this.getListAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetPlatform = function () {
        this._platform = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "use", {
        get: function () {
            return this.getBooleanAttribute('use');
        },
        set: function (value) {
            this._use = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.resetUse = function () {
        this._use = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "useInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._use;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "dockerContainer", {
        get: function () {
            return this._dockerContainer;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.putDockerContainer = function (value) {
        this._dockerContainer.internalValue = value;
    };
    BuildxBuilder.prototype.resetDockerContainer = function () {
        this._dockerContainer.internalValue = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "dockerContainerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dockerContainer.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "kubernetes", {
        get: function () {
            return this._kubernetes;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.putKubernetes = function (value) {
        this._kubernetes.internalValue = value;
    };
    BuildxBuilder.prototype.resetKubernetes = function () {
        this._kubernetes.internalValue = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "kubernetesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kubernetes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildxBuilder.prototype, "remote", {
        get: function () {
            return this._remote;
        },
        enumerable: false,
        configurable: true
    });
    BuildxBuilder.prototype.putRemote = function (value) {
        this._remote.internalValue = value;
    };
    BuildxBuilder.prototype.resetRemote = function () {
        this._remote.internalValue = undefined;
    };
    Object.defineProperty(BuildxBuilder.prototype, "remoteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._remote.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BuildxBuilder.prototype.synthesizeAttributes = function () {
        return {
            append: cdktf.booleanToTerraform(this._append),
            bootstrap: cdktf.booleanToTerraform(this._bootstrap),
            buildkit_config: cdktf.stringToTerraform(this._buildkitConfig),
            buildkit_flags: cdktf.stringToTerraform(this._buildkitFlags),
            driver: cdktf.stringToTerraform(this._driver),
            driver_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._driverOptions),
            endpoint: cdktf.stringToTerraform(this._endpoint),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            node: cdktf.stringToTerraform(this._node),
            platform: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platform),
            use: cdktf.booleanToTerraform(this._use),
            docker_container: buildxBuilderDockerContainerToTerraform(this._dockerContainer.internalValue),
            kubernetes: buildxBuilderKubernetesToTerraform(this._kubernetes.internalValue),
            remote: buildxBuilderRemoteToTerraform(this._remote.internalValue),
        };
    };
    BuildxBuilder.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            append: {
                value: cdktf.booleanToHclTerraform(this._append),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bootstrap: {
                value: cdktf.booleanToHclTerraform(this._bootstrap),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            buildkit_config: {
                value: cdktf.stringToHclTerraform(this._buildkitConfig),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            buildkit_flags: {
                value: cdktf.stringToHclTerraform(this._buildkitFlags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            driver: {
                value: cdktf.stringToHclTerraform(this._driver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            driver_options: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._driverOptions),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            endpoint: {
                value: cdktf.stringToHclTerraform(this._endpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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
            node: {
                value: cdktf.stringToHclTerraform(this._node),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            platform: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platform),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            use: {
                value: cdktf.booleanToHclTerraform(this._use),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            docker_container: {
                value: buildxBuilderDockerContainerToHclTerraform(this._dockerContainer.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BuildxBuilderDockerContainerList",
            },
            kubernetes: {
                value: buildxBuilderKubernetesToHclTerraform(this._kubernetes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BuildxBuilderKubernetesList",
            },
            remote: {
                value: buildxBuilderRemoteToHclTerraform(this._remote.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BuildxBuilderRemoteList",
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
    BuildxBuilder.tfResourceType = "docker_buildx_builder";
    return BuildxBuilder;
}(cdktf.TerraformResource));
exports.BuildxBuilder = BuildxBuilder;
