// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function buildxBuilderDockerContainerToTerraform(struct) {
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
export function buildxBuilderDockerContainerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BuildxBuilderDockerContainerOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // cgroup_parent - computed: false, optional: true, required: false
    _cgroupParent;
    get cgroupParent() {
        return this.getStringAttribute('cgroup_parent');
    }
    set cgroupParent(value) {
        this._cgroupParent = value;
    }
    resetCgroupParent() {
        this._cgroupParent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cgroupParentInput() {
        return this._cgroupParent;
    }
    // cpu_period - computed: false, optional: true, required: false
    _cpuPeriod;
    get cpuPeriod() {
        return this.getStringAttribute('cpu_period');
    }
    set cpuPeriod(value) {
        this._cpuPeriod = value;
    }
    resetCpuPeriod() {
        this._cpuPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuPeriodInput() {
        return this._cpuPeriod;
    }
    // cpu_quota - computed: false, optional: true, required: false
    _cpuQuota;
    get cpuQuota() {
        return this.getStringAttribute('cpu_quota');
    }
    set cpuQuota(value) {
        this._cpuQuota = value;
    }
    resetCpuQuota() {
        this._cpuQuota = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuQuotaInput() {
        return this._cpuQuota;
    }
    // cpu_shares - computed: false, optional: true, required: false
    _cpuShares;
    get cpuShares() {
        return this.getStringAttribute('cpu_shares');
    }
    set cpuShares(value) {
        this._cpuShares = value;
    }
    resetCpuShares() {
        this._cpuShares = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSharesInput() {
        return this._cpuShares;
    }
    // cpuset_cpus - computed: false, optional: true, required: false
    _cpusetCpus;
    get cpusetCpus() {
        return this.getStringAttribute('cpuset_cpus');
    }
    set cpusetCpus(value) {
        this._cpusetCpus = value;
    }
    resetCpusetCpus() {
        this._cpusetCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpusetCpusInput() {
        return this._cpusetCpus;
    }
    // cpuset_mems - computed: false, optional: true, required: false
    _cpusetMems;
    get cpusetMems() {
        return this.getStringAttribute('cpuset_mems');
    }
    set cpusetMems(value) {
        this._cpusetMems = value;
    }
    resetCpusetMems() {
        this._cpusetMems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpusetMemsInput() {
        return this._cpusetMems;
    }
    // default_load - computed: false, optional: true, required: false
    _defaultLoad;
    get defaultLoad() {
        return this.getBooleanAttribute('default_load');
    }
    set defaultLoad(value) {
        this._defaultLoad = value;
    }
    resetDefaultLoad() {
        this._defaultLoad = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultLoadInput() {
        return this._defaultLoad;
    }
    // env - computed: false, optional: true, required: false
    _env;
    get env() {
        return this.getStringMapAttribute('env');
    }
    set env(value) {
        this._env = value;
    }
    resetEnv() {
        this._env = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get envInput() {
        return this._env;
    }
    // image - computed: false, optional: true, required: false
    _image;
    get image() {
        return this.getStringAttribute('image');
    }
    set image(value) {
        this._image = value;
    }
    resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageInput() {
        return this._image;
    }
    // memory - computed: false, optional: true, required: false
    _memory;
    get memory() {
        return this.getStringAttribute('memory');
    }
    set memory(value) {
        this._memory = value;
    }
    resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryInput() {
        return this._memory;
    }
    // memory_swap - computed: false, optional: true, required: false
    _memorySwap;
    get memorySwap() {
        return this.getStringAttribute('memory_swap');
    }
    set memorySwap(value) {
        this._memorySwap = value;
    }
    resetMemorySwap() {
        this._memorySwap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memorySwapInput() {
        return this._memorySwap;
    }
    // network - computed: false, optional: true, required: false
    _network;
    get network() {
        return this.getStringAttribute('network');
    }
    set network(value) {
        this._network = value;
    }
    resetNetwork() {
        this._network = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkInput() {
        return this._network;
    }
    // restart_policy - computed: false, optional: true, required: false
    _restartPolicy;
    get restartPolicy() {
        return this.getStringAttribute('restart_policy');
    }
    set restartPolicy(value) {
        this._restartPolicy = value;
    }
    resetRestartPolicy() {
        this._restartPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restartPolicyInput() {
        return this._restartPolicy;
    }
}
export function buildxBuilderKubernetesLimitsToTerraform(struct) {
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
export function buildxBuilderKubernetesLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BuildxBuilderKubernetesLimitsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // cpu - computed: false, optional: true, required: false
    _cpu;
    get cpu() {
        return this.getStringAttribute('cpu');
    }
    set cpu(value) {
        this._cpu = value;
    }
    resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuInput() {
        return this._cpu;
    }
    // ephemeral_storage - computed: false, optional: true, required: false
    _ephemeralStorage;
    get ephemeralStorage() {
        return this.getStringAttribute('ephemeral_storage');
    }
    set ephemeralStorage(value) {
        this._ephemeralStorage = value;
    }
    resetEphemeralStorage() {
        this._ephemeralStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ephemeralStorageInput() {
        return this._ephemeralStorage;
    }
    // memory - computed: false, optional: true, required: false
    _memory;
    get memory() {
        return this.getStringAttribute('memory');
    }
    set memory(value) {
        this._memory = value;
    }
    resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryInput() {
        return this._memory;
    }
}
export function buildxBuilderKubernetesQemuToTerraform(struct) {
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
export function buildxBuilderKubernetesQemuToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BuildxBuilderKubernetesQemuOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._install !== undefined) {
            hasAnyValues = true;
            internalValueResult.install = this._install;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // image - computed: false, optional: true, required: false
    _image;
    get image() {
        return this.getStringAttribute('image');
    }
    set image(value) {
        this._image = value;
    }
    resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageInput() {
        return this._image;
    }
    // install - computed: false, optional: true, required: false
    _install;
    get install() {
        return this.getBooleanAttribute('install');
    }
    set install(value) {
        this._install = value;
    }
    resetInstall() {
        this._install = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get installInput() {
        return this._install;
    }
}
export function buildxBuilderKubernetesRequestsToTerraform(struct) {
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
export function buildxBuilderKubernetesRequestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BuildxBuilderKubernetesRequestsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // cpu - computed: false, optional: true, required: false
    _cpu;
    get cpu() {
        return this.getStringAttribute('cpu');
    }
    set cpu(value) {
        this._cpu = value;
    }
    resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuInput() {
        return this._cpu;
    }
    // ephemeral_storage - computed: false, optional: true, required: false
    _ephemeralStorage;
    get ephemeralStorage() {
        return this.getStringAttribute('ephemeral_storage');
    }
    set ephemeralStorage(value) {
        this._ephemeralStorage = value;
    }
    resetEphemeralStorage() {
        this._ephemeralStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ephemeralStorageInput() {
        return this._ephemeralStorage;
    }
    // memory - computed: false, optional: true, required: false
    _memory;
    get memory() {
        return this.getStringAttribute('memory');
    }
    set memory(value) {
        this._memory = value;
    }
    resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryInput() {
        return this._memory;
    }
}
export function buildxBuilderKubernetesToTerraform(struct) {
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
export function buildxBuilderKubernetesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BuildxBuilderKubernetesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
        if (this._limits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limits = this._limits?.internalValue;
        }
        if (this._qemu?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.qemu = this._qemu?.internalValue;
        }
        if (this._requests?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requests = this._requests?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // annotations - computed: false, optional: true, required: false
    _annotations;
    get annotations() {
        return this.getStringAttribute('annotations');
    }
    set annotations(value) {
        this._annotations = value;
    }
    resetAnnotations() {
        this._annotations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get annotationsInput() {
        return this._annotations;
    }
    // default_load - computed: false, optional: true, required: false
    _defaultLoad;
    get defaultLoad() {
        return this.getBooleanAttribute('default_load');
    }
    set defaultLoad(value) {
        this._defaultLoad = value;
    }
    resetDefaultLoad() {
        this._defaultLoad = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultLoadInput() {
        return this._defaultLoad;
    }
    // image - computed: false, optional: true, required: false
    _image;
    get image() {
        return this.getStringAttribute('image');
    }
    set image(value) {
        this._image = value;
    }
    resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageInput() {
        return this._image;
    }
    // labels - computed: false, optional: true, required: false
    _labels;
    get labels() {
        return this.getStringAttribute('labels');
    }
    set labels(value) {
        this._labels = value;
    }
    resetLabels() {
        this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels;
    }
    // loadbalance - computed: false, optional: true, required: false
    _loadbalance;
    get loadbalance() {
        return this.getStringAttribute('loadbalance');
    }
    set loadbalance(value) {
        this._loadbalance = value;
    }
    resetLoadbalance() {
        this._loadbalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadbalanceInput() {
        return this._loadbalance;
    }
    // namespace - computed: false, optional: true, required: false
    _namespace;
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    set namespace(value) {
        this._namespace = value;
    }
    resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    // nodeselector - computed: false, optional: true, required: false
    _nodeselector;
    get nodeselector() {
        return this.getStringAttribute('nodeselector');
    }
    set nodeselector(value) {
        this._nodeselector = value;
    }
    resetNodeselector() {
        this._nodeselector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nodeselectorInput() {
        return this._nodeselector;
    }
    // replicas - computed: false, optional: true, required: false
    _replicas;
    get replicas() {
        return this.getNumberAttribute('replicas');
    }
    set replicas(value) {
        this._replicas = value;
    }
    resetReplicas() {
        this._replicas = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicasInput() {
        return this._replicas;
    }
    // rootless - computed: false, optional: true, required: false
    _rootless;
    get rootless() {
        return this.getBooleanAttribute('rootless');
    }
    set rootless(value) {
        this._rootless = value;
    }
    resetRootless() {
        this._rootless = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootlessInput() {
        return this._rootless;
    }
    // schedulername - computed: false, optional: true, required: false
    _schedulername;
    get schedulername() {
        return this.getStringAttribute('schedulername');
    }
    set schedulername(value) {
        this._schedulername = value;
    }
    resetSchedulername() {
        this._schedulername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schedulernameInput() {
        return this._schedulername;
    }
    // serviceaccount - computed: false, optional: true, required: false
    _serviceaccount;
    get serviceaccount() {
        return this.getStringAttribute('serviceaccount');
    }
    set serviceaccount(value) {
        this._serviceaccount = value;
    }
    resetServiceaccount() {
        this._serviceaccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceaccountInput() {
        return this._serviceaccount;
    }
    // timeout - computed: false, optional: true, required: false
    _timeout;
    get timeout() {
        return this.getStringAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
    // tolerations - computed: false, optional: true, required: false
    _tolerations;
    get tolerations() {
        return this.getStringAttribute('tolerations');
    }
    set tolerations(value) {
        this._tolerations = value;
    }
    resetTolerations() {
        this._tolerations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tolerationsInput() {
        return this._tolerations;
    }
    // limits - computed: false, optional: true, required: false
    _limits = new BuildxBuilderKubernetesLimitsOutputReference(this, "limits");
    get limits() {
        return this._limits;
    }
    putLimits(value) {
        this._limits.internalValue = value;
    }
    resetLimits() {
        this._limits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitsInput() {
        return this._limits.internalValue;
    }
    // qemu - computed: false, optional: true, required: false
    _qemu = new BuildxBuilderKubernetesQemuOutputReference(this, "qemu");
    get qemu() {
        return this._qemu;
    }
    putQemu(value) {
        this._qemu.internalValue = value;
    }
    resetQemu() {
        this._qemu.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get qemuInput() {
        return this._qemu.internalValue;
    }
    // requests - computed: false, optional: true, required: false
    _requests = new BuildxBuilderKubernetesRequestsOutputReference(this, "requests");
    get requests() {
        return this._requests;
    }
    putRequests(value) {
        this._requests.internalValue = value;
    }
    resetRequests() {
        this._requests.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestsInput() {
        return this._requests.internalValue;
    }
}
export function buildxBuilderRemoteToTerraform(struct) {
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
export function buildxBuilderRemoteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BuildxBuilderRemoteOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // cacert - computed: false, optional: true, required: false
    _cacert;
    get cacert() {
        return this.getStringAttribute('cacert');
    }
    set cacert(value) {
        this._cacert = value;
    }
    resetCacert() {
        this._cacert = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacertInput() {
        return this._cacert;
    }
    // cert - computed: false, optional: true, required: false
    _cert;
    get cert() {
        return this.getStringAttribute('cert');
    }
    set cert(value) {
        this._cert = value;
    }
    resetCert() {
        this._cert = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certInput() {
        return this._cert;
    }
    // default_load - computed: false, optional: true, required: false
    _defaultLoad;
    get defaultLoad() {
        return this.getBooleanAttribute('default_load');
    }
    set defaultLoad(value) {
        this._defaultLoad = value;
    }
    resetDefaultLoad() {
        this._defaultLoad = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultLoadInput() {
        return this._defaultLoad;
    }
    // key - computed: false, optional: true, required: false
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // servername - computed: false, optional: true, required: false
    _servername;
    get servername() {
        return this.getStringAttribute('servername');
    }
    set servername(value) {
        this._servername = value;
    }
    resetServername() {
        this._servername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get servernameInput() {
        return this._servername;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/buildx_builder docker_buildx_builder}
*/
export class BuildxBuilder extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_buildx_builder";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_buildx_builder", importId: importFromId, provider });
    }
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
    constructor(scope, id, config = {}) {
        super(scope, id, {
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
        });
        this._append = config.append;
        this._bootstrap = config.bootstrap;
        this._buildkitConfig = config.buildkitConfig;
        this._buildkitFlags = config.buildkitFlags;
        this._driver = config.driver;
        this._driverOptions = config.driverOptions;
        this._endpoint = config.endpoint;
        this._id = config.id;
        this._name = config.name;
        this._node = config.nodeAttribute;
        this._platform = config.platform;
        this._use = config.use;
        this._dockerContainer.internalValue = config.dockerContainer;
        this._kubernetes.internalValue = config.kubernetes;
        this._remote.internalValue = config.remote;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // append - computed: false, optional: true, required: false
    _append;
    get append() {
        return this.getBooleanAttribute('append');
    }
    set append(value) {
        this._append = value;
    }
    resetAppend() {
        this._append = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appendInput() {
        return this._append;
    }
    // bootstrap - computed: false, optional: true, required: false
    _bootstrap;
    get bootstrap() {
        return this.getBooleanAttribute('bootstrap');
    }
    set bootstrap(value) {
        this._bootstrap = value;
    }
    resetBootstrap() {
        this._bootstrap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bootstrapInput() {
        return this._bootstrap;
    }
    // buildkit_config - computed: false, optional: true, required: false
    _buildkitConfig;
    get buildkitConfig() {
        return this.getStringAttribute('buildkit_config');
    }
    set buildkitConfig(value) {
        this._buildkitConfig = value;
    }
    resetBuildkitConfig() {
        this._buildkitConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildkitConfigInput() {
        return this._buildkitConfig;
    }
    // buildkit_flags - computed: false, optional: true, required: false
    _buildkitFlags;
    get buildkitFlags() {
        return this.getStringAttribute('buildkit_flags');
    }
    set buildkitFlags(value) {
        this._buildkitFlags = value;
    }
    resetBuildkitFlags() {
        this._buildkitFlags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildkitFlagsInput() {
        return this._buildkitFlags;
    }
    // driver - computed: false, optional: true, required: false
    _driver;
    get driver() {
        return this.getStringAttribute('driver');
    }
    set driver(value) {
        this._driver = value;
    }
    resetDriver() {
        this._driver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverInput() {
        return this._driver;
    }
    // driver_options - computed: false, optional: true, required: false
    _driverOptions;
    get driverOptions() {
        return this.getStringMapAttribute('driver_options');
    }
    set driverOptions(value) {
        this._driverOptions = value;
    }
    resetDriverOptions() {
        this._driverOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverOptionsInput() {
        return this._driverOptions;
    }
    // endpoint - computed: false, optional: true, required: false
    _endpoint;
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    set endpoint(value) {
        this._endpoint = value;
    }
    resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointInput() {
        return this._endpoint;
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
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // node - computed: false, optional: true, required: false
    _node;
    get nodeAttribute() {
        return this.getStringAttribute('node');
    }
    set nodeAttribute(value) {
        this._node = value;
    }
    resetNodeAttribute() {
        this._node = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nodeAttributeInput() {
        return this._node;
    }
    // platform - computed: false, optional: true, required: false
    _platform;
    get platform() {
        return this.getListAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
    // use - computed: false, optional: true, required: false
    _use;
    get use() {
        return this.getBooleanAttribute('use');
    }
    set use(value) {
        this._use = value;
    }
    resetUse() {
        this._use = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useInput() {
        return this._use;
    }
    // docker_container - computed: false, optional: true, required: false
    _dockerContainer = new BuildxBuilderDockerContainerOutputReference(this, "docker_container");
    get dockerContainer() {
        return this._dockerContainer;
    }
    putDockerContainer(value) {
        this._dockerContainer.internalValue = value;
    }
    resetDockerContainer() {
        this._dockerContainer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dockerContainerInput() {
        return this._dockerContainer.internalValue;
    }
    // kubernetes - computed: false, optional: true, required: false
    _kubernetes = new BuildxBuilderKubernetesOutputReference(this, "kubernetes");
    get kubernetes() {
        return this._kubernetes;
    }
    putKubernetes(value) {
        this._kubernetes.internalValue = value;
    }
    resetKubernetes() {
        this._kubernetes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kubernetesInput() {
        return this._kubernetes.internalValue;
    }
    // remote - computed: false, optional: true, required: false
    _remote = new BuildxBuilderRemoteOutputReference(this, "remote");
    get remote() {
        return this._remote;
    }
    putRemote(value) {
        this._remote.internalValue = value;
    }
    resetRemote() {
        this._remote.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteInput() {
        return this._remote.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
