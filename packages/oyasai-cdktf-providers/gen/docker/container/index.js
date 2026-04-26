// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function containerNetworkDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function containerNetworkDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ContainerNetworkDataOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
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
    // gateway - computed: true, optional: false, required: false
    get gateway() {
        return this.getStringAttribute('gateway');
    }
    // global_ipv6_address - computed: true, optional: false, required: false
    get globalIpv6Address() {
        return this.getStringAttribute('global_ipv6_address');
    }
    // global_ipv6_prefix_length - computed: true, optional: false, required: false
    get globalIpv6PrefixLength() {
        return this.getNumberAttribute('global_ipv6_prefix_length');
    }
    // ip_address - computed: true, optional: false, required: false
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    // ip_prefix_length - computed: true, optional: false, required: false
    get ipPrefixLength() {
        return this.getNumberAttribute('ip_prefix_length');
    }
    // ipv6_gateway - computed: true, optional: false, required: false
    get ipv6Gateway() {
        return this.getStringAttribute('ipv6_gateway');
    }
    // mac_address - computed: true, optional: false, required: false
    get macAddress() {
        return this.getStringAttribute('mac_address');
    }
    // network_name - computed: true, optional: false, required: false
    get networkName() {
        return this.getStringAttribute('network_name');
    }
}
export class ContainerNetworkDataList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
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
        return new ContainerNetworkDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerCapabilitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.add),
        drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.drop),
    };
}
export function containerCapabilitiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        add: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.add),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        drop: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.drop),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerCapabilitiesOutputReference extends cdktf.ComplexObject {
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
        if (this._add !== undefined) {
            hasAnyValues = true;
            internalValueResult.add = this._add;
        }
        if (this._drop !== undefined) {
            hasAnyValues = true;
            internalValueResult.drop = this._drop;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._add = undefined;
            this._drop = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._add = value.add;
            this._drop = value.drop;
        }
    }
    // add - computed: false, optional: true, required: false
    _add;
    get add() {
        return cdktf.Fn.tolist(this.getListAttribute('add'));
    }
    set add(value) {
        this._add = value;
    }
    resetAdd() {
        this._add = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addInput() {
        return this._add;
    }
    // drop - computed: false, optional: true, required: false
    _drop;
    get drop() {
        return cdktf.Fn.tolist(this.getListAttribute('drop'));
    }
    set drop(value) {
        this._drop = value;
    }
    resetDrop() {
        this._drop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dropInput() {
        return this._drop;
    }
}
export function containerDeviceReadBpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        rate: cdktf.numberToTerraform(struct.rate),
    };
}
export function containerDeviceReadBpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktf.numberToHclTerraform(struct.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerDeviceReadBpsOutputReference extends cdktf.ComplexObject {
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
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._rate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rate = this._rate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
            this._rate = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
            this._rate = value.rate;
        }
    }
    // path - computed: false, optional: false, required: true
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // rate - computed: false, optional: false, required: true
    _rate;
    get rate() {
        return this.getNumberAttribute('rate');
    }
    set rate(value) {
        this._rate = value;
    }
    // Temporarily expose input value. Use with caution.
    get rateInput() {
        return this._rate;
    }
}
export class ContainerDeviceReadBpsList extends cdktf.ComplexList {
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
        return new ContainerDeviceReadBpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerDeviceReadIopsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        rate: cdktf.numberToTerraform(struct.rate),
    };
}
export function containerDeviceReadIopsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktf.numberToHclTerraform(struct.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerDeviceReadIopsOutputReference extends cdktf.ComplexObject {
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
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._rate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rate = this._rate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
            this._rate = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
            this._rate = value.rate;
        }
    }
    // path - computed: false, optional: false, required: true
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // rate - computed: false, optional: false, required: true
    _rate;
    get rate() {
        return this.getNumberAttribute('rate');
    }
    set rate(value) {
        this._rate = value;
    }
    // Temporarily expose input value. Use with caution.
    get rateInput() {
        return this._rate;
    }
}
export class ContainerDeviceReadIopsList extends cdktf.ComplexList {
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
        return new ContainerDeviceReadIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerDeviceRequestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.capabilities),
        count: cdktf.numberToTerraform(struct.count),
        device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.deviceIds),
        driver: cdktf.stringToTerraform(struct.driver),
        options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.options),
    };
}
export function containerDeviceRequestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        capabilities: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.capabilities),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        count: {
            value: cdktf.numberToHclTerraform(struct.count),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        device_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.deviceIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        driver: {
            value: cdktf.stringToHclTerraform(struct.driver),
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerDeviceRequestsOutputReference extends cdktf.ComplexObject {
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
        if (this._capabilities !== undefined) {
            hasAnyValues = true;
            internalValueResult.capabilities = this._capabilities;
        }
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._deviceIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceIds = this._deviceIds;
        }
        if (this._driver !== undefined) {
            hasAnyValues = true;
            internalValueResult.driver = this._driver;
        }
        if (this._options !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capabilities = undefined;
            this._count = undefined;
            this._deviceIds = undefined;
            this._driver = undefined;
            this._options = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capabilities = value.capabilities;
            this._count = value.count;
            this._deviceIds = value.deviceIds;
            this._driver = value.driver;
            this._options = value.options;
        }
    }
    // capabilities - computed: false, optional: true, required: false
    _capabilities;
    get capabilities() {
        return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
    }
    set capabilities(value) {
        this._capabilities = value;
    }
    resetCapabilities() {
        this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capabilitiesInput() {
        return this._capabilities;
    }
    // count - computed: false, optional: true, required: false
    _count;
    get count() {
        return this.getNumberAttribute('count');
    }
    set count(value) {
        this._count = value;
    }
    resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countInput() {
        return this._count;
    }
    // device_ids - computed: false, optional: true, required: false
    _deviceIds;
    get deviceIds() {
        return cdktf.Fn.tolist(this.getListAttribute('device_ids'));
    }
    set deviceIds(value) {
        this._deviceIds = value;
    }
    resetDeviceIds() {
        this._deviceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceIdsInput() {
        return this._deviceIds;
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
    // options - computed: false, optional: true, required: false
    _options;
    get options() {
        return this.getStringMapAttribute('options');
    }
    set options(value) {
        this._options = value;
    }
    resetOptions() {
        this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optionsInput() {
        return this._options;
    }
}
export class ContainerDeviceRequestsList extends cdktf.ComplexList {
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
        return new ContainerDeviceRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerDeviceWriteBpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        rate: cdktf.numberToTerraform(struct.rate),
    };
}
export function containerDeviceWriteBpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktf.numberToHclTerraform(struct.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerDeviceWriteBpsOutputReference extends cdktf.ComplexObject {
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
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._rate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rate = this._rate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
            this._rate = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
            this._rate = value.rate;
        }
    }
    // path - computed: false, optional: false, required: true
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // rate - computed: false, optional: false, required: true
    _rate;
    get rate() {
        return this.getNumberAttribute('rate');
    }
    set rate(value) {
        this._rate = value;
    }
    // Temporarily expose input value. Use with caution.
    get rateInput() {
        return this._rate;
    }
}
export class ContainerDeviceWriteBpsList extends cdktf.ComplexList {
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
        return new ContainerDeviceWriteBpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerDeviceWriteIopsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        rate: cdktf.numberToTerraform(struct.rate),
    };
}
export function containerDeviceWriteIopsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktf.numberToHclTerraform(struct.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerDeviceWriteIopsOutputReference extends cdktf.ComplexObject {
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
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._rate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rate = this._rate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
            this._rate = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
            this._rate = value.rate;
        }
    }
    // path - computed: false, optional: false, required: true
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // rate - computed: false, optional: false, required: true
    _rate;
    get rate() {
        return this.getNumberAttribute('rate');
    }
    set rate(value) {
        this._rate = value;
    }
    // Temporarily expose input value. Use with caution.
    get rateInput() {
        return this._rate;
    }
}
export class ContainerDeviceWriteIopsList extends cdktf.ComplexList {
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
        return new ContainerDeviceWriteIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerDevicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        host_path: cdktf.stringToTerraform(struct.hostPath),
        permissions: cdktf.stringToTerraform(struct.permissions),
    };
}
export function containerDevicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        container_path: {
            value: cdktf.stringToHclTerraform(struct.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_path: {
            value: cdktf.stringToHclTerraform(struct.hostPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktf.stringToHclTerraform(struct.permissions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerDevicesOutputReference extends cdktf.ComplexObject {
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
        if (this._containerPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPath = this._containerPath;
        }
        if (this._hostPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPath = this._hostPath;
        }
        if (this._permissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerPath = undefined;
            this._hostPath = undefined;
            this._permissions = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerPath = value.containerPath;
            this._hostPath = value.hostPath;
            this._permissions = value.permissions;
        }
    }
    // container_path - computed: false, optional: true, required: false
    _containerPath;
    get containerPath() {
        return this.getStringAttribute('container_path');
    }
    set containerPath(value) {
        this._containerPath = value;
    }
    resetContainerPath() {
        this._containerPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containerPathInput() {
        return this._containerPath;
    }
    // host_path - computed: false, optional: false, required: true
    _hostPath;
    get hostPath() {
        return this.getStringAttribute('host_path');
    }
    set hostPath(value) {
        this._hostPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostPathInput() {
        return this._hostPath;
    }
    // permissions - computed: false, optional: true, required: false
    _permissions;
    get permissions() {
        return this.getStringAttribute('permissions');
    }
    set permissions(value) {
        this._permissions = value;
    }
    resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsInput() {
        return this._permissions;
    }
}
export class ContainerDevicesList extends cdktf.ComplexList {
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
        return new ContainerDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerHealthcheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.stringToTerraform(struct.interval),
        retries: cdktf.numberToTerraform(struct.retries),
        start_interval: cdktf.stringToTerraform(struct.startInterval),
        start_period: cdktf.stringToTerraform(struct.startPeriod),
        test: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.test),
        timeout: cdktf.stringToTerraform(struct.timeout),
    };
}
export function containerHealthcheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
        start_interval: {
            value: cdktf.stringToHclTerraform(struct.startInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerHealthcheckOutputReference extends cdktf.ComplexObject {
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
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._retries !== undefined) {
            hasAnyValues = true;
            internalValueResult.retries = this._retries;
        }
        if (this._startInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.startInterval = this._startInterval;
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
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._interval = undefined;
            this._retries = undefined;
            this._startInterval = undefined;
            this._startPeriod = undefined;
            this._test = undefined;
            this._timeout = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._interval = value.interval;
            this._retries = value.retries;
            this._startInterval = value.startInterval;
            this._startPeriod = value.startPeriod;
            this._test = value.test;
            this._timeout = value.timeout;
        }
    }
    // interval - computed: false, optional: true, required: false
    _interval;
    get interval() {
        return this.getStringAttribute('interval');
    }
    set interval(value) {
        this._interval = value;
    }
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get intervalInput() {
        return this._interval;
    }
    // retries - computed: false, optional: true, required: false
    _retries;
    get retries() {
        return this.getNumberAttribute('retries');
    }
    set retries(value) {
        this._retries = value;
    }
    resetRetries() {
        this._retries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retriesInput() {
        return this._retries;
    }
    // start_interval - computed: false, optional: true, required: false
    _startInterval;
    get startInterval() {
        return this.getStringAttribute('start_interval');
    }
    set startInterval(value) {
        this._startInterval = value;
    }
    resetStartInterval() {
        this._startInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startIntervalInput() {
        return this._startInterval;
    }
    // start_period - computed: false, optional: true, required: false
    _startPeriod;
    get startPeriod() {
        return this.getStringAttribute('start_period');
    }
    set startPeriod(value) {
        this._startPeriod = value;
    }
    resetStartPeriod() {
        this._startPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startPeriodInput() {
        return this._startPeriod;
    }
    // test - computed: false, optional: true, required: false
    _test;
    get test() {
        return this.getListAttribute('test');
    }
    set test(value) {
        this._test = value;
    }
    resetTest() {
        this._test = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get testInput() {
        return this._test;
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
}
export function containerHostToTerraform(struct) {
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
export function containerHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerHostOutputReference extends cdktf.ComplexObject {
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
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // host - computed: false, optional: false, required: true
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // ip - computed: false, optional: false, required: true
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
}
export class ContainerHostList extends cdktf.ComplexList {
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
        return new ContainerHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerLabelsToTerraform(struct) {
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
export function containerLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerLabelsOutputReference extends cdktf.ComplexObject {
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
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // label - computed: false, optional: false, required: true
    _label;
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class ContainerLabelsList extends cdktf.ComplexList {
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
        return new ContainerLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerMountsBindOptionsToTerraform(struct) {
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
export function containerMountsBindOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        propagation: {
            value: cdktf.stringToHclTerraform(struct.propagation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerMountsBindOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._propagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagation = this._propagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._propagation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._propagation = value.propagation;
        }
    }
    // propagation - computed: false, optional: true, required: false
    _propagation;
    get propagation() {
        return this.getStringAttribute('propagation');
    }
    set propagation(value) {
        this._propagation = value;
    }
    resetPropagation() {
        this._propagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propagationInput() {
        return this._propagation;
    }
}
export function containerMountsTmpfsOptionsToTerraform(struct) {
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
export function containerMountsTmpfsOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerMountsTmpfsOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._sizeBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeBytes = this._sizeBytes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // mode - computed: false, optional: true, required: false
    _mode;
    get mode() {
        return this.getNumberAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // size_bytes - computed: false, optional: true, required: false
    _sizeBytes;
    get sizeBytes() {
        return this.getNumberAttribute('size_bytes');
    }
    set sizeBytes(value) {
        this._sizeBytes = value;
    }
    resetSizeBytes() {
        this._sizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizeBytesInput() {
        return this._sizeBytes;
    }
}
export function containerMountsVolumeOptionsLabelsToTerraform(struct) {
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
export function containerMountsVolumeOptionsLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerMountsVolumeOptionsLabelsOutputReference extends cdktf.ComplexObject {
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
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // label - computed: false, optional: false, required: true
    _label;
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class ContainerMountsVolumeOptionsLabelsList extends cdktf.ComplexList {
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
        return new ContainerMountsVolumeOptionsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerMountsVolumeOptionsToTerraform(struct) {
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
        subpath: cdktf.stringToTerraform(struct.subpath),
        labels: cdktf.listMapper(containerMountsVolumeOptionsLabelsToTerraform, true)(struct.labels),
    };
}
export function containerMountsVolumeOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
        subpath: {
            value: cdktf.stringToHclTerraform(struct.subpath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        labels: {
            value: cdktf.listMapperHcl(containerMountsVolumeOptionsLabelsToHclTerraform, true)(struct.labels),
            isBlock: true,
            type: "set",
            storageClassType: "ContainerMountsVolumeOptionsLabelsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerMountsVolumeOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._subpath !== undefined) {
            hasAnyValues = true;
            internalValueResult.subpath = this._subpath;
        }
        if (this._labels?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._driverName = undefined;
            this._driverOptions = undefined;
            this._noCopy = undefined;
            this._subpath = undefined;
            this._labels.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._driverName = value.driverName;
            this._driverOptions = value.driverOptions;
            this._noCopy = value.noCopy;
            this._subpath = value.subpath;
            this._labels.internalValue = value.labels;
        }
    }
    // driver_name - computed: false, optional: true, required: false
    _driverName;
    get driverName() {
        return this.getStringAttribute('driver_name');
    }
    set driverName(value) {
        this._driverName = value;
    }
    resetDriverName() {
        this._driverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverNameInput() {
        return this._driverName;
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
    // no_copy - computed: false, optional: true, required: false
    _noCopy;
    get noCopy() {
        return this.getBooleanAttribute('no_copy');
    }
    set noCopy(value) {
        this._noCopy = value;
    }
    resetNoCopy() {
        this._noCopy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noCopyInput() {
        return this._noCopy;
    }
    // subpath - computed: false, optional: true, required: false
    _subpath;
    get subpath() {
        return this.getStringAttribute('subpath');
    }
    set subpath(value) {
        this._subpath = value;
    }
    resetSubpath() {
        this._subpath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subpathInput() {
        return this._subpath;
    }
    // labels - computed: false, optional: true, required: false
    _labels = new ContainerMountsVolumeOptionsLabelsList(this, "labels", true);
    get labels() {
        return this._labels;
    }
    putLabels(value) {
        this._labels.internalValue = value;
    }
    resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels.internalValue;
    }
}
export function containerMountsToTerraform(struct) {
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
        bind_options: containerMountsBindOptionsToTerraform(struct.bindOptions),
        tmpfs_options: containerMountsTmpfsOptionsToTerraform(struct.tmpfsOptions),
        volume_options: containerMountsVolumeOptionsToTerraform(struct.volumeOptions),
    };
}
export function containerMountsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
            value: containerMountsBindOptionsToHclTerraform(struct.bindOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsBindOptionsList",
        },
        tmpfs_options: {
            value: containerMountsTmpfsOptionsToHclTerraform(struct.tmpfsOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsTmpfsOptionsList",
        },
        volume_options: {
            value: containerMountsVolumeOptionsToHclTerraform(struct.volumeOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsVolumeOptionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerMountsOutputReference extends cdktf.ComplexObject {
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
        if (this._bindOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bindOptions = this._bindOptions?.internalValue;
        }
        if (this._tmpfsOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tmpfsOptions = this._tmpfsOptions?.internalValue;
        }
        if (this._volumeOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeOptions = this._volumeOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // read_only - computed: false, optional: true, required: false
    _readOnly;
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    // source - computed: false, optional: true, required: false
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    // target - computed: false, optional: false, required: true
    _target;
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // bind_options - computed: false, optional: true, required: false
    _bindOptions = new ContainerMountsBindOptionsOutputReference(this, "bind_options");
    get bindOptions() {
        return this._bindOptions;
    }
    putBindOptions(value) {
        this._bindOptions.internalValue = value;
    }
    resetBindOptions() {
        this._bindOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bindOptionsInput() {
        return this._bindOptions.internalValue;
    }
    // tmpfs_options - computed: false, optional: true, required: false
    _tmpfsOptions = new ContainerMountsTmpfsOptionsOutputReference(this, "tmpfs_options");
    get tmpfsOptions() {
        return this._tmpfsOptions;
    }
    putTmpfsOptions(value) {
        this._tmpfsOptions.internalValue = value;
    }
    resetTmpfsOptions() {
        this._tmpfsOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tmpfsOptionsInput() {
        return this._tmpfsOptions.internalValue;
    }
    // volume_options - computed: false, optional: true, required: false
    _volumeOptions = new ContainerMountsVolumeOptionsOutputReference(this, "volume_options");
    get volumeOptions() {
        return this._volumeOptions;
    }
    putVolumeOptions(value) {
        this._volumeOptions.internalValue = value;
    }
    resetVolumeOptions() {
        this._volumeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeOptionsInput() {
        return this._volumeOptions.internalValue;
    }
}
export class ContainerMountsList extends cdktf.ComplexList {
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
        return new ContainerMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerNetworksAdvancedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.aliases),
        driver_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.driverOpts),
        gw_priority: cdktf.numberToTerraform(struct.gwPriority),
        ipv4_address: cdktf.stringToTerraform(struct.ipv4Address),
        ipv6_address: cdktf.stringToTerraform(struct.ipv6Address),
        link_local_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.linkLocalIps),
        mac_address: cdktf.stringToTerraform(struct.macAddress),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function containerNetworksAdvancedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
        gw_priority: {
            value: cdktf.numberToHclTerraform(struct.gwPriority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv4_address: {
            value: cdktf.stringToHclTerraform(struct.ipv4Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6_address: {
            value: cdktf.stringToHclTerraform(struct.ipv6Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link_local_ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.linkLocalIps),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        mac_address: {
            value: cdktf.stringToHclTerraform(struct.macAddress),
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerNetworksAdvancedOutputReference extends cdktf.ComplexObject {
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
        if (this._aliases !== undefined) {
            hasAnyValues = true;
            internalValueResult.aliases = this._aliases;
        }
        if (this._driverOpts !== undefined) {
            hasAnyValues = true;
            internalValueResult.driverOpts = this._driverOpts;
        }
        if (this._gwPriority !== undefined) {
            hasAnyValues = true;
            internalValueResult.gwPriority = this._gwPriority;
        }
        if (this._ipv4Address !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4Address = this._ipv4Address;
        }
        if (this._ipv6Address !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Address = this._ipv6Address;
        }
        if (this._linkLocalIps !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkLocalIps = this._linkLocalIps;
        }
        if (this._macAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.macAddress = this._macAddress;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aliases = undefined;
            this._driverOpts = undefined;
            this._gwPriority = undefined;
            this._ipv4Address = undefined;
            this._ipv6Address = undefined;
            this._linkLocalIps = undefined;
            this._macAddress = undefined;
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
            this._gwPriority = value.gwPriority;
            this._ipv4Address = value.ipv4Address;
            this._ipv6Address = value.ipv6Address;
            this._linkLocalIps = value.linkLocalIps;
            this._macAddress = value.macAddress;
            this._name = value.name;
        }
    }
    // aliases - computed: false, optional: true, required: false
    _aliases;
    get aliases() {
        return cdktf.Fn.tolist(this.getListAttribute('aliases'));
    }
    set aliases(value) {
        this._aliases = value;
    }
    resetAliases() {
        this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasesInput() {
        return this._aliases;
    }
    // driver_opts - computed: false, optional: true, required: false
    _driverOpts;
    get driverOpts() {
        return cdktf.Fn.tolist(this.getListAttribute('driver_opts'));
    }
    set driverOpts(value) {
        this._driverOpts = value;
    }
    resetDriverOpts() {
        this._driverOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverOptsInput() {
        return this._driverOpts;
    }
    // gw_priority - computed: false, optional: true, required: false
    _gwPriority;
    get gwPriority() {
        return this.getNumberAttribute('gw_priority');
    }
    set gwPriority(value) {
        this._gwPriority = value;
    }
    resetGwPriority() {
        this._gwPriority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gwPriorityInput() {
        return this._gwPriority;
    }
    // ipv4_address - computed: false, optional: true, required: false
    _ipv4Address;
    get ipv4Address() {
        return this.getStringAttribute('ipv4_address');
    }
    set ipv4Address(value) {
        this._ipv4Address = value;
    }
    resetIpv4Address() {
        this._ipv4Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4AddressInput() {
        return this._ipv4Address;
    }
    // ipv6_address - computed: false, optional: true, required: false
    _ipv6Address;
    get ipv6Address() {
        return this.getStringAttribute('ipv6_address');
    }
    set ipv6Address(value) {
        this._ipv6Address = value;
    }
    resetIpv6Address() {
        this._ipv6Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6AddressInput() {
        return this._ipv6Address;
    }
    // link_local_ips - computed: false, optional: true, required: false
    _linkLocalIps;
    get linkLocalIps() {
        return cdktf.Fn.tolist(this.getListAttribute('link_local_ips'));
    }
    set linkLocalIps(value) {
        this._linkLocalIps = value;
    }
    resetLinkLocalIps() {
        this._linkLocalIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get linkLocalIpsInput() {
        return this._linkLocalIps;
    }
    // mac_address - computed: false, optional: true, required: false
    _macAddress;
    get macAddress() {
        return this.getStringAttribute('mac_address');
    }
    set macAddress(value) {
        this._macAddress = value;
    }
    resetMacAddress() {
        this._macAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get macAddressInput() {
        return this._macAddress;
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
}
export class ContainerNetworksAdvancedList extends cdktf.ComplexList {
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
        return new ContainerNetworksAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerPortsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        external: cdktf.numberToTerraform(struct.external),
        internal: cdktf.numberToTerraform(struct.internal),
        ip: cdktf.stringToTerraform(struct.ip),
        protocol: cdktf.stringToTerraform(struct.protocol),
    };
}
export function containerPortsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        external: {
            value: cdktf.numberToHclTerraform(struct.external),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        internal: {
            value: cdktf.numberToHclTerraform(struct.internal),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerPortsOutputReference extends cdktf.ComplexObject {
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
        if (this._external !== undefined) {
            hasAnyValues = true;
            internalValueResult.external = this._external;
        }
        if (this._internal !== undefined) {
            hasAnyValues = true;
            internalValueResult.internal = this._internal;
        }
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._external = undefined;
            this._internal = undefined;
            this._ip = undefined;
            this._protocol = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._external = value.external;
            this._internal = value.internal;
            this._ip = value.ip;
            this._protocol = value.protocol;
        }
    }
    // external - computed: true, optional: true, required: false
    _external;
    get external() {
        return this.getNumberAttribute('external');
    }
    set external(value) {
        this._external = value;
    }
    resetExternal() {
        this._external = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalInput() {
        return this._external;
    }
    // internal - computed: false, optional: false, required: true
    _internal;
    get internal() {
        return this.getNumberAttribute('internal');
    }
    set internal(value) {
        this._internal = value;
    }
    // Temporarily expose input value. Use with caution.
    get internalInput() {
        return this._internal;
    }
    // ip - computed: false, optional: true, required: false
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    resetIp() {
        this._ip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
    // protocol - computed: false, optional: true, required: false
    _protocol;
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
}
export class ContainerPortsList extends cdktf.ComplexList {
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
        return new ContainerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerTimeoutsToTerraform(struct) {
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
export function containerTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerTimeoutsOutputReference extends cdktf.ComplexObject {
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
    }
    set internalValue(value) {
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
    }
    // create - computed: false, optional: true, required: false
    _create;
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    // delete - computed: false, optional: true, required: false
    _delete;
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
    // update - computed: false, optional: true, required: false
    _update;
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
export function containerUlimitToTerraform(struct) {
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
export function containerUlimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerUlimitOutputReference extends cdktf.ComplexObject {
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
    }
    set internalValue(value) {
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
    }
    // hard - computed: false, optional: false, required: true
    _hard;
    get hard() {
        return this.getNumberAttribute('hard');
    }
    set hard(value) {
        this._hard = value;
    }
    // Temporarily expose input value. Use with caution.
    get hardInput() {
        return this._hard;
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
    // soft - computed: false, optional: false, required: true
    _soft;
    get soft() {
        return this.getNumberAttribute('soft');
    }
    set soft(value) {
        this._soft = value;
    }
    // Temporarily expose input value. Use with caution.
    get softInput() {
        return this._soft;
    }
}
export class ContainerUlimitList extends cdktf.ComplexList {
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
        return new ContainerUlimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerUploadToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_base64: cdktf.stringToTerraform(struct.contentBase64),
        executable: cdktf.booleanToTerraform(struct.executable),
        file: cdktf.stringToTerraform(struct.file),
        permissions: cdktf.stringToTerraform(struct.permissions),
        source: cdktf.stringToTerraform(struct.source),
        source_hash: cdktf.stringToTerraform(struct.sourceHash),
    };
}
export function containerUploadToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content: {
            value: cdktf.stringToHclTerraform(struct.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_base64: {
            value: cdktf.stringToHclTerraform(struct.contentBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        executable: {
            value: cdktf.booleanToHclTerraform(struct.executable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        file: {
            value: cdktf.stringToHclTerraform(struct.file),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktf.stringToHclTerraform(struct.permissions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_hash: {
            value: cdktf.stringToHclTerraform(struct.sourceHash),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerUploadOutputReference extends cdktf.ComplexObject {
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
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        if (this._contentBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentBase64 = this._contentBase64;
        }
        if (this._executable !== undefined) {
            hasAnyValues = true;
            internalValueResult.executable = this._executable;
        }
        if (this._file !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file;
        }
        if (this._permissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._sourceHash !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceHash = this._sourceHash;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
            this._contentBase64 = undefined;
            this._executable = undefined;
            this._file = undefined;
            this._permissions = undefined;
            this._source = undefined;
            this._sourceHash = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
            this._contentBase64 = value.contentBase64;
            this._executable = value.executable;
            this._file = value.file;
            this._permissions = value.permissions;
            this._source = value.source;
            this._sourceHash = value.sourceHash;
        }
    }
    // content - computed: false, optional: true, required: false
    _content;
    get content() {
        return this.getStringAttribute('content');
    }
    set content(value) {
        this._content = value;
    }
    resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content;
    }
    // content_base64 - computed: false, optional: true, required: false
    _contentBase64;
    get contentBase64() {
        return this.getStringAttribute('content_base64');
    }
    set contentBase64(value) {
        this._contentBase64 = value;
    }
    resetContentBase64() {
        this._contentBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentBase64Input() {
        return this._contentBase64;
    }
    // executable - computed: false, optional: true, required: false
    _executable;
    get executable() {
        return this.getBooleanAttribute('executable');
    }
    set executable(value) {
        this._executable = value;
    }
    resetExecutable() {
        this._executable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get executableInput() {
        return this._executable;
    }
    // file - computed: false, optional: false, required: true
    _file;
    get file() {
        return this.getStringAttribute('file');
    }
    set file(value) {
        this._file = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file;
    }
    // permissions - computed: false, optional: true, required: false
    _permissions;
    get permissions() {
        return this.getStringAttribute('permissions');
    }
    set permissions(value) {
        this._permissions = value;
    }
    resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsInput() {
        return this._permissions;
    }
    // source - computed: false, optional: true, required: false
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    // source_hash - computed: false, optional: true, required: false
    _sourceHash;
    get sourceHash() {
        return this.getStringAttribute('source_hash');
    }
    set sourceHash(value) {
        this._sourceHash = value;
    }
    resetSourceHash() {
        this._sourceHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceHashInput() {
        return this._sourceHash;
    }
}
export class ContainerUploadList extends cdktf.ComplexList {
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
        return new ContainerUploadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function containerVolumesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        from_container: cdktf.stringToTerraform(struct.fromContainer),
        host_path: cdktf.stringToTerraform(struct.hostPath),
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        selinux_relabel: cdktf.stringToTerraform(struct.selinuxRelabel),
        volume_name: cdktf.stringToTerraform(struct.volumeName),
    };
}
export function containerVolumesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        container_path: {
            value: cdktf.stringToHclTerraform(struct.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_container: {
            value: cdktf.stringToHclTerraform(struct.fromContainer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_path: {
            value: cdktf.stringToHclTerraform(struct.hostPath),
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
        selinux_relabel: {
            value: cdktf.stringToHclTerraform(struct.selinuxRelabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_name: {
            value: cdktf.stringToHclTerraform(struct.volumeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ContainerVolumesOutputReference extends cdktf.ComplexObject {
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
        if (this._containerPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPath = this._containerPath;
        }
        if (this._fromContainer !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromContainer = this._fromContainer;
        }
        if (this._hostPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPath = this._hostPath;
        }
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._selinuxRelabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.selinuxRelabel = this._selinuxRelabel;
        }
        if (this._volumeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeName = this._volumeName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerPath = undefined;
            this._fromContainer = undefined;
            this._hostPath = undefined;
            this._readOnly = undefined;
            this._selinuxRelabel = undefined;
            this._volumeName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerPath = value.containerPath;
            this._fromContainer = value.fromContainer;
            this._hostPath = value.hostPath;
            this._readOnly = value.readOnly;
            this._selinuxRelabel = value.selinuxRelabel;
            this._volumeName = value.volumeName;
        }
    }
    // container_path - computed: false, optional: true, required: false
    _containerPath;
    get containerPath() {
        return this.getStringAttribute('container_path');
    }
    set containerPath(value) {
        this._containerPath = value;
    }
    resetContainerPath() {
        this._containerPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containerPathInput() {
        return this._containerPath;
    }
    // from_container - computed: false, optional: true, required: false
    _fromContainer;
    get fromContainer() {
        return this.getStringAttribute('from_container');
    }
    set fromContainer(value) {
        this._fromContainer = value;
    }
    resetFromContainer() {
        this._fromContainer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromContainerInput() {
        return this._fromContainer;
    }
    // host_path - computed: false, optional: true, required: false
    _hostPath;
    get hostPath() {
        return this.getStringAttribute('host_path');
    }
    set hostPath(value) {
        this._hostPath = value;
    }
    resetHostPath() {
        this._hostPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostPathInput() {
        return this._hostPath;
    }
    // read_only - computed: false, optional: true, required: false
    _readOnly;
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    // selinux_relabel - computed: false, optional: true, required: false
    _selinuxRelabel;
    get selinuxRelabel() {
        return this.getStringAttribute('selinux_relabel');
    }
    set selinuxRelabel(value) {
        this._selinuxRelabel = value;
    }
    resetSelinuxRelabel() {
        this._selinuxRelabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selinuxRelabelInput() {
        return this._selinuxRelabel;
    }
    // volume_name - computed: false, optional: true, required: false
    _volumeName;
    get volumeName() {
        return this.getStringAttribute('volume_name');
    }
    set volumeName(value) {
        this._volumeName = value;
    }
    resetVolumeName() {
        this._volumeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeNameInput() {
        return this._volumeName;
    }
}
export class ContainerVolumesList extends cdktf.ComplexList {
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
        return new ContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container docker_container}
*/
export class Container extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_container";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Container to import
    * @param importFromId The id of the existing Container that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Container to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_container", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container docker_container} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ContainerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_container',
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
        this._attach = config.attach;
        this._cgroupParent = config.cgroupParent;
        this._cgroupnsMode = config.cgroupnsMode;
        this._command = config.command;
        this._containerReadRefreshTimeoutMilliseconds = config.containerReadRefreshTimeoutMilliseconds;
        this._cpuPeriod = config.cpuPeriod;
        this._cpuQuota = config.cpuQuota;
        this._cpuSet = config.cpuSet;
        this._cpuShares = config.cpuShares;
        this._cpus = config.cpus;
        this._destroyGraceSeconds = config.destroyGraceSeconds;
        this._dns = config.dns;
        this._dnsOpts = config.dnsOpts;
        this._dnsSearch = config.dnsSearch;
        this._domainname = config.domainname;
        this._entrypoint = config.entrypoint;
        this._env = config.env;
        this._gpus = config.gpus;
        this._groupAdd = config.groupAdd;
        this._hostname = config.hostname;
        this._id = config.id;
        this._image = config.image;
        this._init = config.init;
        this._ipcMode = config.ipcMode;
        this._logDriver = config.logDriver;
        this._logOpts = config.logOpts;
        this._logs = config.logs;
        this._maxRetryCount = config.maxRetryCount;
        this._memory = config.memory;
        this._memoryReservation = config.memoryReservation;
        this._memorySwap = config.memorySwap;
        this._mustRun = config.mustRun;
        this._name = config.name;
        this._networkMode = config.networkMode;
        this._pidMode = config.pidMode;
        this._platform = config.platform;
        this._privileged = config.privileged;
        this._publishAllPorts = config.publishAllPorts;
        this._readOnly = config.readOnly;
        this._removeVolumes = config.removeVolumes;
        this._restart = config.restart;
        this._rm = config.rm;
        this._runtime = config.runtime;
        this._securityOpts = config.securityOpts;
        this._shmSize = config.shmSize;
        this._start = config.start;
        this._stdinOpen = config.stdinOpen;
        this._stopSignal = config.stopSignal;
        this._stopTimeout = config.stopTimeout;
        this._storageOpts = config.storageOpts;
        this._sysctls = config.sysctls;
        this._tmpfs = config.tmpfs;
        this._tty = config.tty;
        this._user = config.user;
        this._usernsMode = config.usernsMode;
        this._wait = config.wait;
        this._waitTimeout = config.waitTimeout;
        this._workingDir = config.workingDir;
        this._capabilities.internalValue = config.capabilities;
        this._deviceReadBps.internalValue = config.deviceReadBps;
        this._deviceReadIops.internalValue = config.deviceReadIops;
        this._deviceRequests.internalValue = config.deviceRequests;
        this._deviceWriteBps.internalValue = config.deviceWriteBps;
        this._deviceWriteIops.internalValue = config.deviceWriteIops;
        this._devices.internalValue = config.devices;
        this._healthcheck.internalValue = config.healthcheck;
        this._host.internalValue = config.host;
        this._labels.internalValue = config.labels;
        this._mounts.internalValue = config.mounts;
        this._networksAdvanced.internalValue = config.networksAdvanced;
        this._ports.internalValue = config.ports;
        this._timeouts.internalValue = config.timeouts;
        this._ulimit.internalValue = config.ulimit;
        this._upload.internalValue = config.upload;
        this._volumes.internalValue = config.volumes;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // attach - computed: false, optional: true, required: false
    _attach;
    get attach() {
        return this.getBooleanAttribute('attach');
    }
    set attach(value) {
        this._attach = value;
    }
    resetAttach() {
        this._attach = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attachInput() {
        return this._attach;
    }
    // bridge - computed: true, optional: false, required: false
    get bridge() {
        return this.getStringAttribute('bridge');
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
    // cgroupns_mode - computed: false, optional: true, required: false
    _cgroupnsMode;
    get cgroupnsMode() {
        return this.getStringAttribute('cgroupns_mode');
    }
    set cgroupnsMode(value) {
        this._cgroupnsMode = value;
    }
    resetCgroupnsMode() {
        this._cgroupnsMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cgroupnsModeInput() {
        return this._cgroupnsMode;
    }
    // command - computed: true, optional: true, required: false
    _command;
    get command() {
        return this.getListAttribute('command');
    }
    set command(value) {
        this._command = value;
    }
    resetCommand() {
        this._command = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commandInput() {
        return this._command;
    }
    // container_logs - computed: true, optional: false, required: false
    get containerLogs() {
        return this.getStringAttribute('container_logs');
    }
    // container_read_refresh_timeout_milliseconds - computed: false, optional: true, required: false
    _containerReadRefreshTimeoutMilliseconds;
    get containerReadRefreshTimeoutMilliseconds() {
        return this.getNumberAttribute('container_read_refresh_timeout_milliseconds');
    }
    set containerReadRefreshTimeoutMilliseconds(value) {
        this._containerReadRefreshTimeoutMilliseconds = value;
    }
    resetContainerReadRefreshTimeoutMilliseconds() {
        this._containerReadRefreshTimeoutMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containerReadRefreshTimeoutMillisecondsInput() {
        return this._containerReadRefreshTimeoutMilliseconds;
    }
    // cpu_period - computed: false, optional: true, required: false
    _cpuPeriod;
    get cpuPeriod() {
        return this.getNumberAttribute('cpu_period');
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
        return this.getNumberAttribute('cpu_quota');
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
    // cpu_set - computed: false, optional: true, required: false
    _cpuSet;
    get cpuSet() {
        return this.getStringAttribute('cpu_set');
    }
    set cpuSet(value) {
        this._cpuSet = value;
    }
    resetCpuSet() {
        this._cpuSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSetInput() {
        return this._cpuSet;
    }
    // cpu_shares - computed: false, optional: true, required: false
    _cpuShares;
    get cpuShares() {
        return this.getNumberAttribute('cpu_shares');
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
    // cpus - computed: false, optional: true, required: false
    _cpus;
    get cpus() {
        return this.getStringAttribute('cpus');
    }
    set cpus(value) {
        this._cpus = value;
    }
    resetCpus() {
        this._cpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpusInput() {
        return this._cpus;
    }
    // destroy_grace_seconds - computed: false, optional: true, required: false
    _destroyGraceSeconds;
    get destroyGraceSeconds() {
        return this.getNumberAttribute('destroy_grace_seconds');
    }
    set destroyGraceSeconds(value) {
        this._destroyGraceSeconds = value;
    }
    resetDestroyGraceSeconds() {
        this._destroyGraceSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destroyGraceSecondsInput() {
        return this._destroyGraceSeconds;
    }
    // dns - computed: false, optional: true, required: false
    _dns;
    get dns() {
        return cdktf.Fn.tolist(this.getListAttribute('dns'));
    }
    set dns(value) {
        this._dns = value;
    }
    resetDns() {
        this._dns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsInput() {
        return this._dns;
    }
    // dns_opts - computed: false, optional: true, required: false
    _dnsOpts;
    get dnsOpts() {
        return cdktf.Fn.tolist(this.getListAttribute('dns_opts'));
    }
    set dnsOpts(value) {
        this._dnsOpts = value;
    }
    resetDnsOpts() {
        this._dnsOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsOptsInput() {
        return this._dnsOpts;
    }
    // dns_search - computed: false, optional: true, required: false
    _dnsSearch;
    get dnsSearch() {
        return cdktf.Fn.tolist(this.getListAttribute('dns_search'));
    }
    set dnsSearch(value) {
        this._dnsSearch = value;
    }
    resetDnsSearch() {
        this._dnsSearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsSearchInput() {
        return this._dnsSearch;
    }
    // domainname - computed: false, optional: true, required: false
    _domainname;
    get domainname() {
        return this.getStringAttribute('domainname');
    }
    set domainname(value) {
        this._domainname = value;
    }
    resetDomainname() {
        this._domainname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainnameInput() {
        return this._domainname;
    }
    // entrypoint - computed: true, optional: true, required: false
    _entrypoint;
    get entrypoint() {
        return this.getListAttribute('entrypoint');
    }
    set entrypoint(value) {
        this._entrypoint = value;
    }
    resetEntrypoint() {
        this._entrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get entrypointInput() {
        return this._entrypoint;
    }
    // env - computed: true, optional: true, required: false
    _env;
    get env() {
        return cdktf.Fn.tolist(this.getListAttribute('env'));
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
    // exit_code - computed: true, optional: false, required: false
    get exitCode() {
        return this.getNumberAttribute('exit_code');
    }
    // gpus - computed: false, optional: true, required: false
    _gpus;
    get gpus() {
        return this.getStringAttribute('gpus');
    }
    set gpus(value) {
        this._gpus = value;
    }
    resetGpus() {
        this._gpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gpusInput() {
        return this._gpus;
    }
    // group_add - computed: false, optional: true, required: false
    _groupAdd;
    get groupAdd() {
        return cdktf.Fn.tolist(this.getListAttribute('group_add'));
    }
    set groupAdd(value) {
        this._groupAdd = value;
    }
    resetGroupAdd() {
        this._groupAdd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupAddInput() {
        return this._groupAdd;
    }
    // hostname - computed: true, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
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
    // image - computed: false, optional: false, required: true
    _image;
    get image() {
        return this.getStringAttribute('image');
    }
    set image(value) {
        this._image = value;
    }
    // Temporarily expose input value. Use with caution.
    get imageInput() {
        return this._image;
    }
    // init - computed: true, optional: true, required: false
    _init;
    get init() {
        return this.getBooleanAttribute('init');
    }
    set init(value) {
        this._init = value;
    }
    resetInit() {
        this._init = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initInput() {
        return this._init;
    }
    // ipc_mode - computed: true, optional: true, required: false
    _ipcMode;
    get ipcMode() {
        return this.getStringAttribute('ipc_mode');
    }
    set ipcMode(value) {
        this._ipcMode = value;
    }
    resetIpcMode() {
        this._ipcMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipcModeInput() {
        return this._ipcMode;
    }
    // log_driver - computed: true, optional: true, required: false
    _logDriver;
    get logDriver() {
        return this.getStringAttribute('log_driver');
    }
    set logDriver(value) {
        this._logDriver = value;
    }
    resetLogDriver() {
        this._logDriver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logDriverInput() {
        return this._logDriver;
    }
    // log_opts - computed: false, optional: true, required: false
    _logOpts;
    get logOpts() {
        return this.getStringMapAttribute('log_opts');
    }
    set logOpts(value) {
        this._logOpts = value;
    }
    resetLogOpts() {
        this._logOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logOptsInput() {
        return this._logOpts;
    }
    // logs - computed: false, optional: true, required: false
    _logs;
    get logs() {
        return this.getBooleanAttribute('logs');
    }
    set logs(value) {
        this._logs = value;
    }
    resetLogs() {
        this._logs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logsInput() {
        return this._logs;
    }
    // max_retry_count - computed: false, optional: true, required: false
    _maxRetryCount;
    get maxRetryCount() {
        return this.getNumberAttribute('max_retry_count');
    }
    set maxRetryCount(value) {
        this._maxRetryCount = value;
    }
    resetMaxRetryCount() {
        this._maxRetryCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxRetryCountInput() {
        return this._maxRetryCount;
    }
    // memory - computed: false, optional: true, required: false
    _memory;
    get memory() {
        return this.getNumberAttribute('memory');
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
    // memory_reservation - computed: false, optional: true, required: false
    _memoryReservation;
    get memoryReservation() {
        return this.getNumberAttribute('memory_reservation');
    }
    set memoryReservation(value) {
        this._memoryReservation = value;
    }
    resetMemoryReservation() {
        this._memoryReservation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryReservationInput() {
        return this._memoryReservation;
    }
    // memory_swap - computed: false, optional: true, required: false
    _memorySwap;
    get memorySwap() {
        return this.getNumberAttribute('memory_swap');
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
    // must_run - computed: false, optional: true, required: false
    _mustRun;
    get mustRun() {
        return this.getBooleanAttribute('must_run');
    }
    set mustRun(value) {
        this._mustRun = value;
    }
    resetMustRun() {
        this._mustRun = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mustRunInput() {
        return this._mustRun;
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
    // network_data - computed: true, optional: false, required: false
    _networkData = new ContainerNetworkDataList(this, "network_data", false);
    get networkData() {
        return this._networkData;
    }
    // network_mode - computed: false, optional: true, required: false
    _networkMode;
    get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    set networkMode(value) {
        this._networkMode = value;
    }
    resetNetworkMode() {
        this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkModeInput() {
        return this._networkMode;
    }
    // pid_mode - computed: false, optional: true, required: false
    _pidMode;
    get pidMode() {
        return this.getStringAttribute('pid_mode');
    }
    set pidMode(value) {
        this._pidMode = value;
    }
    resetPidMode() {
        this._pidMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pidModeInput() {
        return this._pidMode;
    }
    // platform - computed: true, optional: true, required: false
    _platform;
    get platform() {
        return this.getStringAttribute('platform');
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
    // privileged - computed: false, optional: true, required: false
    _privileged;
    get privileged() {
        return this.getBooleanAttribute('privileged');
    }
    set privileged(value) {
        this._privileged = value;
    }
    resetPrivileged() {
        this._privileged = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privilegedInput() {
        return this._privileged;
    }
    // publish_all_ports - computed: false, optional: true, required: false
    _publishAllPorts;
    get publishAllPorts() {
        return this.getBooleanAttribute('publish_all_ports');
    }
    set publishAllPorts(value) {
        this._publishAllPorts = value;
    }
    resetPublishAllPorts() {
        this._publishAllPorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publishAllPortsInput() {
        return this._publishAllPorts;
    }
    // read_only - computed: false, optional: true, required: false
    _readOnly;
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    // remove_volumes - computed: false, optional: true, required: false
    _removeVolumes;
    get removeVolumes() {
        return this.getBooleanAttribute('remove_volumes');
    }
    set removeVolumes(value) {
        this._removeVolumes = value;
    }
    resetRemoveVolumes() {
        this._removeVolumes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get removeVolumesInput() {
        return this._removeVolumes;
    }
    // restart - computed: false, optional: true, required: false
    _restart;
    get restart() {
        return this.getStringAttribute('restart');
    }
    set restart(value) {
        this._restart = value;
    }
    resetRestart() {
        this._restart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restartInput() {
        return this._restart;
    }
    // rm - computed: false, optional: true, required: false
    _rm;
    get rm() {
        return this.getBooleanAttribute('rm');
    }
    set rm(value) {
        this._rm = value;
    }
    resetRm() {
        this._rm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rmInput() {
        return this._rm;
    }
    // runtime - computed: true, optional: true, required: false
    _runtime;
    get runtime() {
        return this.getStringAttribute('runtime');
    }
    set runtime(value) {
        this._runtime = value;
    }
    resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeInput() {
        return this._runtime;
    }
    // security_opts - computed: true, optional: true, required: false
    _securityOpts;
    get securityOpts() {
        return cdktf.Fn.tolist(this.getListAttribute('security_opts'));
    }
    set securityOpts(value) {
        this._securityOpts = value;
    }
    resetSecurityOpts() {
        this._securityOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityOptsInput() {
        return this._securityOpts;
    }
    // shm_size - computed: true, optional: true, required: false
    _shmSize;
    get shmSize() {
        return this.getNumberAttribute('shm_size');
    }
    set shmSize(value) {
        this._shmSize = value;
    }
    resetShmSize() {
        this._shmSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shmSizeInput() {
        return this._shmSize;
    }
    // start - computed: false, optional: true, required: false
    _start;
    get start() {
        return this.getBooleanAttribute('start');
    }
    set start(value) {
        this._start = value;
    }
    resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startInput() {
        return this._start;
    }
    // stdin_open - computed: false, optional: true, required: false
    _stdinOpen;
    get stdinOpen() {
        return this.getBooleanAttribute('stdin_open');
    }
    set stdinOpen(value) {
        this._stdinOpen = value;
    }
    resetStdinOpen() {
        this._stdinOpen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stdinOpenInput() {
        return this._stdinOpen;
    }
    // stop_signal - computed: true, optional: true, required: false
    _stopSignal;
    get stopSignal() {
        return this.getStringAttribute('stop_signal');
    }
    set stopSignal(value) {
        this._stopSignal = value;
    }
    resetStopSignal() {
        this._stopSignal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stopSignalInput() {
        return this._stopSignal;
    }
    // stop_timeout - computed: true, optional: true, required: false
    _stopTimeout;
    get stopTimeout() {
        return this.getNumberAttribute('stop_timeout');
    }
    set stopTimeout(value) {
        this._stopTimeout = value;
    }
    resetStopTimeout() {
        this._stopTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stopTimeoutInput() {
        return this._stopTimeout;
    }
    // storage_opts - computed: false, optional: true, required: false
    _storageOpts;
    get storageOpts() {
        return this.getStringMapAttribute('storage_opts');
    }
    set storageOpts(value) {
        this._storageOpts = value;
    }
    resetStorageOpts() {
        this._storageOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageOptsInput() {
        return this._storageOpts;
    }
    // sysctls - computed: false, optional: true, required: false
    _sysctls;
    get sysctls() {
        return this.getStringMapAttribute('sysctls');
    }
    set sysctls(value) {
        this._sysctls = value;
    }
    resetSysctls() {
        this._sysctls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sysctlsInput() {
        return this._sysctls;
    }
    // tmpfs - computed: false, optional: true, required: false
    _tmpfs;
    get tmpfs() {
        return this.getStringMapAttribute('tmpfs');
    }
    set tmpfs(value) {
        this._tmpfs = value;
    }
    resetTmpfs() {
        this._tmpfs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tmpfsInput() {
        return this._tmpfs;
    }
    // tty - computed: false, optional: true, required: false
    _tty;
    get tty() {
        return this.getBooleanAttribute('tty');
    }
    set tty(value) {
        this._tty = value;
    }
    resetTty() {
        this._tty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttyInput() {
        return this._tty;
    }
    // user - computed: false, optional: true, required: false
    _user;
    get user() {
        return this.getStringAttribute('user');
    }
    set user(value) {
        this._user = value;
    }
    resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user;
    }
    // userns_mode - computed: false, optional: true, required: false
    _usernsMode;
    get usernsMode() {
        return this.getStringAttribute('userns_mode');
    }
    set usernsMode(value) {
        this._usernsMode = value;
    }
    resetUsernsMode() {
        this._usernsMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernsModeInput() {
        return this._usernsMode;
    }
    // wait - computed: false, optional: true, required: false
    _wait;
    get wait() {
        return this.getBooleanAttribute('wait');
    }
    set wait(value) {
        this._wait = value;
    }
    resetWait() {
        this._wait = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitInput() {
        return this._wait;
    }
    // wait_timeout - computed: false, optional: true, required: false
    _waitTimeout;
    get waitTimeout() {
        return this.getNumberAttribute('wait_timeout');
    }
    set waitTimeout(value) {
        this._waitTimeout = value;
    }
    resetWaitTimeout() {
        this._waitTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitTimeoutInput() {
        return this._waitTimeout;
    }
    // working_dir - computed: false, optional: true, required: false
    _workingDir;
    get workingDir() {
        return this.getStringAttribute('working_dir');
    }
    set workingDir(value) {
        this._workingDir = value;
    }
    resetWorkingDir() {
        this._workingDir = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workingDirInput() {
        return this._workingDir;
    }
    // capabilities - computed: false, optional: true, required: false
    _capabilities = new ContainerCapabilitiesOutputReference(this, "capabilities");
    get capabilities() {
        return this._capabilities;
    }
    putCapabilities(value) {
        this._capabilities.internalValue = value;
    }
    resetCapabilities() {
        this._capabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capabilitiesInput() {
        return this._capabilities.internalValue;
    }
    // device_read_bps - computed: false, optional: true, required: false
    _deviceReadBps = new ContainerDeviceReadBpsList(this, "device_read_bps", true);
    get deviceReadBps() {
        return this._deviceReadBps;
    }
    putDeviceReadBps(value) {
        this._deviceReadBps.internalValue = value;
    }
    resetDeviceReadBps() {
        this._deviceReadBps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceReadBpsInput() {
        return this._deviceReadBps.internalValue;
    }
    // device_read_iops - computed: false, optional: true, required: false
    _deviceReadIops = new ContainerDeviceReadIopsList(this, "device_read_iops", true);
    get deviceReadIops() {
        return this._deviceReadIops;
    }
    putDeviceReadIops(value) {
        this._deviceReadIops.internalValue = value;
    }
    resetDeviceReadIops() {
        this._deviceReadIops.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceReadIopsInput() {
        return this._deviceReadIops.internalValue;
    }
    // device_requests - computed: false, optional: true, required: false
    _deviceRequests = new ContainerDeviceRequestsList(this, "device_requests", true);
    get deviceRequests() {
        return this._deviceRequests;
    }
    putDeviceRequests(value) {
        this._deviceRequests.internalValue = value;
    }
    resetDeviceRequests() {
        this._deviceRequests.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceRequestsInput() {
        return this._deviceRequests.internalValue;
    }
    // device_write_bps - computed: false, optional: true, required: false
    _deviceWriteBps = new ContainerDeviceWriteBpsList(this, "device_write_bps", true);
    get deviceWriteBps() {
        return this._deviceWriteBps;
    }
    putDeviceWriteBps(value) {
        this._deviceWriteBps.internalValue = value;
    }
    resetDeviceWriteBps() {
        this._deviceWriteBps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceWriteBpsInput() {
        return this._deviceWriteBps.internalValue;
    }
    // device_write_iops - computed: false, optional: true, required: false
    _deviceWriteIops = new ContainerDeviceWriteIopsList(this, "device_write_iops", true);
    get deviceWriteIops() {
        return this._deviceWriteIops;
    }
    putDeviceWriteIops(value) {
        this._deviceWriteIops.internalValue = value;
    }
    resetDeviceWriteIops() {
        this._deviceWriteIops.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceWriteIopsInput() {
        return this._deviceWriteIops.internalValue;
    }
    // devices - computed: false, optional: true, required: false
    _devices = new ContainerDevicesList(this, "devices", true);
    get devices() {
        return this._devices;
    }
    putDevices(value) {
        this._devices.internalValue = value;
    }
    resetDevices() {
        this._devices.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get devicesInput() {
        return this._devices.internalValue;
    }
    // healthcheck - computed: false, optional: true, required: false
    _healthcheck = new ContainerHealthcheckOutputReference(this, "healthcheck");
    get healthcheck() {
        return this._healthcheck;
    }
    putHealthcheck(value) {
        this._healthcheck.internalValue = value;
    }
    resetHealthcheck() {
        this._healthcheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthcheckInput() {
        return this._healthcheck.internalValue;
    }
    // host - computed: false, optional: true, required: false
    _host = new ContainerHostList(this, "host", true);
    get host() {
        return this._host;
    }
    putHost(value) {
        this._host.internalValue = value;
    }
    resetHost() {
        this._host.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host.internalValue;
    }
    // labels - computed: false, optional: true, required: false
    _labels = new ContainerLabelsList(this, "labels", true);
    get labels() {
        return this._labels;
    }
    putLabels(value) {
        this._labels.internalValue = value;
    }
    resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels.internalValue;
    }
    // mounts - computed: false, optional: true, required: false
    _mounts = new ContainerMountsList(this, "mounts", true);
    get mounts() {
        return this._mounts;
    }
    putMounts(value) {
        this._mounts.internalValue = value;
    }
    resetMounts() {
        this._mounts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mountsInput() {
        return this._mounts.internalValue;
    }
    // networks_advanced - computed: false, optional: true, required: false
    _networksAdvanced = new ContainerNetworksAdvancedList(this, "networks_advanced", true);
    get networksAdvanced() {
        return this._networksAdvanced;
    }
    putNetworksAdvanced(value) {
        this._networksAdvanced.internalValue = value;
    }
    resetNetworksAdvanced() {
        this._networksAdvanced.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksAdvancedInput() {
        return this._networksAdvanced.internalValue;
    }
    // ports - computed: false, optional: true, required: false
    _ports = new ContainerPortsList(this, "ports", false);
    get ports() {
        return this._ports;
    }
    putPorts(value) {
        this._ports.internalValue = value;
    }
    resetPorts() {
        this._ports.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portsInput() {
        return this._ports.internalValue;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new ContainerTimeoutsOutputReference(this, "timeouts");
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // ulimit - computed: false, optional: true, required: false
    _ulimit = new ContainerUlimitList(this, "ulimit", true);
    get ulimit() {
        return this._ulimit;
    }
    putUlimit(value) {
        this._ulimit.internalValue = value;
    }
    resetUlimit() {
        this._ulimit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ulimitInput() {
        return this._ulimit.internalValue;
    }
    // upload - computed: false, optional: true, required: false
    _upload = new ContainerUploadList(this, "upload", true);
    get upload() {
        return this._upload;
    }
    putUpload(value) {
        this._upload.internalValue = value;
    }
    resetUpload() {
        this._upload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uploadInput() {
        return this._upload.internalValue;
    }
    // volumes - computed: false, optional: true, required: false
    _volumes = new ContainerVolumesList(this, "volumes", true);
    get volumes() {
        return this._volumes;
    }
    putVolumes(value) {
        this._volumes.internalValue = value;
    }
    resetVolumes() {
        this._volumes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumesInput() {
        return this._volumes.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            attach: cdktf.booleanToTerraform(this._attach),
            cgroup_parent: cdktf.stringToTerraform(this._cgroupParent),
            cgroupns_mode: cdktf.stringToTerraform(this._cgroupnsMode),
            command: cdktf.listMapper(cdktf.stringToTerraform, false)(this._command),
            container_read_refresh_timeout_milliseconds: cdktf.numberToTerraform(this._containerReadRefreshTimeoutMilliseconds),
            cpu_period: cdktf.numberToTerraform(this._cpuPeriod),
            cpu_quota: cdktf.numberToTerraform(this._cpuQuota),
            cpu_set: cdktf.stringToTerraform(this._cpuSet),
            cpu_shares: cdktf.numberToTerraform(this._cpuShares),
            cpus: cdktf.stringToTerraform(this._cpus),
            destroy_grace_seconds: cdktf.numberToTerraform(this._destroyGraceSeconds),
            dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dns),
            dns_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsOpts),
            dns_search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSearch),
            domainname: cdktf.stringToTerraform(this._domainname),
            entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entrypoint),
            env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._env),
            gpus: cdktf.stringToTerraform(this._gpus),
            group_add: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupAdd),
            hostname: cdktf.stringToTerraform(this._hostname),
            id: cdktf.stringToTerraform(this._id),
            image: cdktf.stringToTerraform(this._image),
            init: cdktf.booleanToTerraform(this._init),
            ipc_mode: cdktf.stringToTerraform(this._ipcMode),
            log_driver: cdktf.stringToTerraform(this._logDriver),
            log_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._logOpts),
            logs: cdktf.booleanToTerraform(this._logs),
            max_retry_count: cdktf.numberToTerraform(this._maxRetryCount),
            memory: cdktf.numberToTerraform(this._memory),
            memory_reservation: cdktf.numberToTerraform(this._memoryReservation),
            memory_swap: cdktf.numberToTerraform(this._memorySwap),
            must_run: cdktf.booleanToTerraform(this._mustRun),
            name: cdktf.stringToTerraform(this._name),
            network_mode: cdktf.stringToTerraform(this._networkMode),
            pid_mode: cdktf.stringToTerraform(this._pidMode),
            platform: cdktf.stringToTerraform(this._platform),
            privileged: cdktf.booleanToTerraform(this._privileged),
            publish_all_ports: cdktf.booleanToTerraform(this._publishAllPorts),
            read_only: cdktf.booleanToTerraform(this._readOnly),
            remove_volumes: cdktf.booleanToTerraform(this._removeVolumes),
            restart: cdktf.stringToTerraform(this._restart),
            rm: cdktf.booleanToTerraform(this._rm),
            runtime: cdktf.stringToTerraform(this._runtime),
            security_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityOpts),
            shm_size: cdktf.numberToTerraform(this._shmSize),
            start: cdktf.booleanToTerraform(this._start),
            stdin_open: cdktf.booleanToTerraform(this._stdinOpen),
            stop_signal: cdktf.stringToTerraform(this._stopSignal),
            stop_timeout: cdktf.numberToTerraform(this._stopTimeout),
            storage_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._storageOpts),
            sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(this._sysctls),
            tmpfs: cdktf.hashMapper(cdktf.stringToTerraform)(this._tmpfs),
            tty: cdktf.booleanToTerraform(this._tty),
            user: cdktf.stringToTerraform(this._user),
            userns_mode: cdktf.stringToTerraform(this._usernsMode),
            wait: cdktf.booleanToTerraform(this._wait),
            wait_timeout: cdktf.numberToTerraform(this._waitTimeout),
            working_dir: cdktf.stringToTerraform(this._workingDir),
            capabilities: containerCapabilitiesToTerraform(this._capabilities.internalValue),
            device_read_bps: cdktf.listMapper(containerDeviceReadBpsToTerraform, true)(this._deviceReadBps.internalValue),
            device_read_iops: cdktf.listMapper(containerDeviceReadIopsToTerraform, true)(this._deviceReadIops.internalValue),
            device_requests: cdktf.listMapper(containerDeviceRequestsToTerraform, true)(this._deviceRequests.internalValue),
            device_write_bps: cdktf.listMapper(containerDeviceWriteBpsToTerraform, true)(this._deviceWriteBps.internalValue),
            device_write_iops: cdktf.listMapper(containerDeviceWriteIopsToTerraform, true)(this._deviceWriteIops.internalValue),
            devices: cdktf.listMapper(containerDevicesToTerraform, true)(this._devices.internalValue),
            healthcheck: containerHealthcheckToTerraform(this._healthcheck.internalValue),
            host: cdktf.listMapper(containerHostToTerraform, true)(this._host.internalValue),
            labels: cdktf.listMapper(containerLabelsToTerraform, true)(this._labels.internalValue),
            mounts: cdktf.listMapper(containerMountsToTerraform, true)(this._mounts.internalValue),
            networks_advanced: cdktf.listMapper(containerNetworksAdvancedToTerraform, true)(this._networksAdvanced.internalValue),
            ports: cdktf.listMapper(containerPortsToTerraform, true)(this._ports.internalValue),
            timeouts: containerTimeoutsToTerraform(this._timeouts.internalValue),
            ulimit: cdktf.listMapper(containerUlimitToTerraform, true)(this._ulimit.internalValue),
            upload: cdktf.listMapper(containerUploadToTerraform, true)(this._upload.internalValue),
            volumes: cdktf.listMapper(containerVolumesToTerraform, true)(this._volumes.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            attach: {
                value: cdktf.booleanToHclTerraform(this._attach),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cgroup_parent: {
                value: cdktf.stringToHclTerraform(this._cgroupParent),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cgroupns_mode: {
                value: cdktf.stringToHclTerraform(this._cgroupnsMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            command: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._command),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            container_read_refresh_timeout_milliseconds: {
                value: cdktf.numberToHclTerraform(this._containerReadRefreshTimeoutMilliseconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_period: {
                value: cdktf.numberToHclTerraform(this._cpuPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_quota: {
                value: cdktf.numberToHclTerraform(this._cpuQuota),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_set: {
                value: cdktf.stringToHclTerraform(this._cpuSet),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cpu_shares: {
                value: cdktf.numberToHclTerraform(this._cpuShares),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpus: {
                value: cdktf.stringToHclTerraform(this._cpus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destroy_grace_seconds: {
                value: cdktf.numberToHclTerraform(this._destroyGraceSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            dns: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dns),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            dns_opts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsOpts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            dns_search: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSearch),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            domainname: {
                value: cdktf.stringToHclTerraform(this._domainname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entrypoint: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entrypoint),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            env: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._env),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            gpus: {
                value: cdktf.stringToHclTerraform(this._gpus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_add: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupAdd),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
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
            image: {
                value: cdktf.stringToHclTerraform(this._image),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            init: {
                value: cdktf.booleanToHclTerraform(this._init),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ipc_mode: {
                value: cdktf.stringToHclTerraform(this._ipcMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_driver: {
                value: cdktf.stringToHclTerraform(this._logDriver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_opts: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._logOpts),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            logs: {
                value: cdktf.booleanToHclTerraform(this._logs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_retry_count: {
                value: cdktf.numberToHclTerraform(this._maxRetryCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory: {
                value: cdktf.numberToHclTerraform(this._memory),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory_reservation: {
                value: cdktf.numberToHclTerraform(this._memoryReservation),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory_swap: {
                value: cdktf.numberToHclTerraform(this._memorySwap),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            must_run: {
                value: cdktf.booleanToHclTerraform(this._mustRun),
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
            network_mode: {
                value: cdktf.stringToHclTerraform(this._networkMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pid_mode: {
                value: cdktf.stringToHclTerraform(this._pidMode),
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
            privileged: {
                value: cdktf.booleanToHclTerraform(this._privileged),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            publish_all_ports: {
                value: cdktf.booleanToHclTerraform(this._publishAllPorts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            read_only: {
                value: cdktf.booleanToHclTerraform(this._readOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            remove_volumes: {
                value: cdktf.booleanToHclTerraform(this._removeVolumes),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            restart: {
                value: cdktf.stringToHclTerraform(this._restart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rm: {
                value: cdktf.booleanToHclTerraform(this._rm),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            runtime: {
                value: cdktf.stringToHclTerraform(this._runtime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_opts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityOpts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            shm_size: {
                value: cdktf.numberToHclTerraform(this._shmSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            start: {
                value: cdktf.booleanToHclTerraform(this._start),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            stdin_open: {
                value: cdktf.booleanToHclTerraform(this._stdinOpen),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            stop_signal: {
                value: cdktf.stringToHclTerraform(this._stopSignal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stop_timeout: {
                value: cdktf.numberToHclTerraform(this._stopTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            storage_opts: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._storageOpts),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            sysctls: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sysctls),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tmpfs: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tmpfs),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tty: {
                value: cdktf.booleanToHclTerraform(this._tty),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            user: {
                value: cdktf.stringToHclTerraform(this._user),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            userns_mode: {
                value: cdktf.stringToHclTerraform(this._usernsMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            wait: {
                value: cdktf.booleanToHclTerraform(this._wait),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            wait_timeout: {
                value: cdktf.numberToHclTerraform(this._waitTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            working_dir: {
                value: cdktf.stringToHclTerraform(this._workingDir),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            capabilities: {
                value: containerCapabilitiesToHclTerraform(this._capabilities.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerCapabilitiesList",
            },
            device_read_bps: {
                value: cdktf.listMapperHcl(containerDeviceReadBpsToHclTerraform, true)(this._deviceReadBps.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceReadBpsList",
            },
            device_read_iops: {
                value: cdktf.listMapperHcl(containerDeviceReadIopsToHclTerraform, true)(this._deviceReadIops.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceReadIopsList",
            },
            device_requests: {
                value: cdktf.listMapperHcl(containerDeviceRequestsToHclTerraform, true)(this._deviceRequests.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceRequestsList",
            },
            device_write_bps: {
                value: cdktf.listMapperHcl(containerDeviceWriteBpsToHclTerraform, true)(this._deviceWriteBps.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceWriteBpsList",
            },
            device_write_iops: {
                value: cdktf.listMapperHcl(containerDeviceWriteIopsToHclTerraform, true)(this._deviceWriteIops.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceWriteIopsList",
            },
            devices: {
                value: cdktf.listMapperHcl(containerDevicesToHclTerraform, true)(this._devices.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDevicesList",
            },
            healthcheck: {
                value: containerHealthcheckToHclTerraform(this._healthcheck.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ContainerHealthcheckList",
            },
            host: {
                value: cdktf.listMapperHcl(containerHostToHclTerraform, true)(this._host.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerHostList",
            },
            labels: {
                value: cdktf.listMapperHcl(containerLabelsToHclTerraform, true)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerLabelsList",
            },
            mounts: {
                value: cdktf.listMapperHcl(containerMountsToHclTerraform, true)(this._mounts.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerMountsList",
            },
            networks_advanced: {
                value: cdktf.listMapperHcl(containerNetworksAdvancedToHclTerraform, true)(this._networksAdvanced.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerNetworksAdvancedList",
            },
            ports: {
                value: cdktf.listMapperHcl(containerPortsToHclTerraform, true)(this._ports.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ContainerPortsList",
            },
            timeouts: {
                value: containerTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ContainerTimeouts",
            },
            ulimit: {
                value: cdktf.listMapperHcl(containerUlimitToHclTerraform, true)(this._ulimit.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerUlimitList",
            },
            upload: {
                value: cdktf.listMapperHcl(containerUploadToHclTerraform, true)(this._upload.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerUploadList",
            },
            volumes: {
                value: cdktf.listMapperHcl(containerVolumesToHclTerraform, true)(this._volumes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerVolumesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
