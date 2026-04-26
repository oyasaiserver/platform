// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustDnsLocationEndpointsDohNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        network: cdktf.stringToTerraform(struct.network),
    };
}
export function zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationEndpointsDohNetworksOutputReference extends cdktf.ComplexObject {
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
        if (this._network !== undefined) {
            hasAnyValues = true;
            internalValueResult.network = this._network;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._network = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._network = value.network;
        }
    }
    // network - computed: true, optional: false, required: true
    _network;
    get network() {
        return this.getStringAttribute('network');
    }
    set network(value) {
        this._network = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkInput() {
        return this._network;
    }
}
export class ZeroTrustDnsLocationEndpointsDohNetworksList extends cdktf.ComplexList {
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
        return new ZeroTrustDnsLocationEndpointsDohNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustDnsLocationEndpointsDohToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsDohNetworksToTerraform, false)(struct.networks),
        require_token: cdktf.booleanToTerraform(struct.requireToken),
    };
}
export function zeroTrustDnsLocationEndpointsDohToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        networks: {
            value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform, false)(struct.networks),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustDnsLocationEndpointsDohNetworksList",
        },
        require_token: {
            value: cdktf.booleanToHclTerraform(struct.requireToken),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationEndpointsDohOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._networks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networks = this._networks?.internalValue;
        }
        if (this._requireToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireToken = this._requireToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._networks.internalValue = undefined;
            this._requireToken = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._networks.internalValue = value.networks;
            this._requireToken = value.requireToken;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // networks - computed: true, optional: true, required: false
    _networks = new ZeroTrustDnsLocationEndpointsDohNetworksList(this, "networks", false);
    get networks() {
        return this._networks;
    }
    putNetworks(value) {
        this._networks.internalValue = value;
    }
    resetNetworks() {
        this._networks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksInput() {
        return this._networks.internalValue;
    }
    // require_token - computed: true, optional: true, required: false
    _requireToken;
    get requireToken() {
        return this.getBooleanAttribute('require_token');
    }
    set requireToken(value) {
        this._requireToken = value;
    }
    resetRequireToken() {
        this._requireToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireTokenInput() {
        return this._requireToken;
    }
}
export function zeroTrustDnsLocationEndpointsDotNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        network: cdktf.stringToTerraform(struct.network),
    };
}
export function zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationEndpointsDotNetworksOutputReference extends cdktf.ComplexObject {
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
        if (this._network !== undefined) {
            hasAnyValues = true;
            internalValueResult.network = this._network;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._network = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._network = value.network;
        }
    }
    // network - computed: true, optional: false, required: true
    _network;
    get network() {
        return this.getStringAttribute('network');
    }
    set network(value) {
        this._network = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkInput() {
        return this._network;
    }
}
export class ZeroTrustDnsLocationEndpointsDotNetworksList extends cdktf.ComplexList {
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
        return new ZeroTrustDnsLocationEndpointsDotNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustDnsLocationEndpointsDotToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsDotNetworksToTerraform, false)(struct.networks),
    };
}
export function zeroTrustDnsLocationEndpointsDotToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        networks: {
            value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform, false)(struct.networks),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustDnsLocationEndpointsDotNetworksList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationEndpointsDotOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._networks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networks = this._networks?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._networks.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._networks.internalValue = value.networks;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // networks - computed: true, optional: true, required: false
    _networks = new ZeroTrustDnsLocationEndpointsDotNetworksList(this, "networks", false);
    get networks() {
        return this._networks;
    }
    putNetworks(value) {
        this._networks.internalValue = value;
    }
    resetNetworks() {
        this._networks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksInput() {
        return this._networks.internalValue;
    }
}
export function zeroTrustDnsLocationEndpointsIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
export function zeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationEndpointsIpv4OutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
export function zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        network: cdktf.stringToTerraform(struct.network),
    };
}
export function zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference extends cdktf.ComplexObject {
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
        if (this._network !== undefined) {
            hasAnyValues = true;
            internalValueResult.network = this._network;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._network = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._network = value.network;
        }
    }
    // network - computed: true, optional: false, required: true
    _network;
    get network() {
        return this.getStringAttribute('network');
    }
    set network(value) {
        this._network = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkInput() {
        return this._network;
    }
}
export class ZeroTrustDnsLocationEndpointsIpv6NetworksList extends cdktf.ComplexList {
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
        return new ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustDnsLocationEndpointsIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform, false)(struct.networks),
    };
}
export function zeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        networks: {
            value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform, false)(struct.networks),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustDnsLocationEndpointsIpv6NetworksList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationEndpointsIpv6OutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._networks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networks = this._networks?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._networks.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._networks.internalValue = value.networks;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // networks - computed: true, optional: true, required: false
    _networks = new ZeroTrustDnsLocationEndpointsIpv6NetworksList(this, "networks", false);
    get networks() {
        return this._networks;
    }
    putNetworks(value) {
        this._networks.internalValue = value;
    }
    resetNetworks() {
        this._networks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksInput() {
        return this._networks.internalValue;
    }
}
export function zeroTrustDnsLocationEndpointsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        doh: zeroTrustDnsLocationEndpointsDohToTerraform(struct.doh),
        dot: zeroTrustDnsLocationEndpointsDotToTerraform(struct.dot),
        ipv4: zeroTrustDnsLocationEndpointsIpv4ToTerraform(struct.ipv4),
        ipv6: zeroTrustDnsLocationEndpointsIpv6ToTerraform(struct.ipv6),
    };
}
export function zeroTrustDnsLocationEndpointsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        doh: {
            value: zeroTrustDnsLocationEndpointsDohToHclTerraform(struct.doh),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDnsLocationEndpointsDoh",
        },
        dot: {
            value: zeroTrustDnsLocationEndpointsDotToHclTerraform(struct.dot),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDnsLocationEndpointsDot",
        },
        ipv4: {
            value: zeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct.ipv4),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDnsLocationEndpointsIpv4",
        },
        ipv6: {
            value: zeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct.ipv6),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDnsLocationEndpointsIpv6",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationEndpointsOutputReference extends cdktf.ComplexObject {
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
        if (this._doh?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doh = this._doh?.internalValue;
        }
        if (this._dot?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dot = this._dot?.internalValue;
        }
        if (this._ipv4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4 = this._ipv4?.internalValue;
        }
        if (this._ipv6?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6 = this._ipv6?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._doh.internalValue = undefined;
            this._dot.internalValue = undefined;
            this._ipv4.internalValue = undefined;
            this._ipv6.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._doh.internalValue = value.doh;
            this._dot.internalValue = value.dot;
            this._ipv4.internalValue = value.ipv4;
            this._ipv6.internalValue = value.ipv6;
        }
    }
    // doh - computed: false, optional: false, required: true
    _doh = new ZeroTrustDnsLocationEndpointsDohOutputReference(this, "doh");
    get doh() {
        return this._doh;
    }
    putDoh(value) {
        this._doh.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get dohInput() {
        return this._doh.internalValue;
    }
    // dot - computed: false, optional: false, required: true
    _dot = new ZeroTrustDnsLocationEndpointsDotOutputReference(this, "dot");
    get dot() {
        return this._dot;
    }
    putDot(value) {
        this._dot.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get dotInput() {
        return this._dot.internalValue;
    }
    // ipv4 - computed: false, optional: false, required: true
    _ipv4 = new ZeroTrustDnsLocationEndpointsIpv4OutputReference(this, "ipv4");
    get ipv4() {
        return this._ipv4;
    }
    putIpv4(value) {
        this._ipv4.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4Input() {
        return this._ipv4.internalValue;
    }
    // ipv6 - computed: false, optional: false, required: true
    _ipv6 = new ZeroTrustDnsLocationEndpointsIpv6OutputReference(this, "ipv6");
    get ipv6() {
        return this._ipv6;
    }
    putIpv6(value) {
        this._ipv6.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6Input() {
        return this._ipv6.internalValue;
    }
}
export function zeroTrustDnsLocationNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        network: cdktf.stringToTerraform(struct.network),
    };
}
export function zeroTrustDnsLocationNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDnsLocationNetworksOutputReference extends cdktf.ComplexObject {
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
        if (this._network !== undefined) {
            hasAnyValues = true;
            internalValueResult.network = this._network;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._network = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._network = value.network;
        }
    }
    // network - computed: true, optional: false, required: true
    _network;
    get network() {
        return this.getStringAttribute('network');
    }
    set network(value) {
        this._network = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkInput() {
        return this._network;
    }
}
export class ZeroTrustDnsLocationNetworksList extends cdktf.ComplexList {
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
        return new ZeroTrustDnsLocationNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location}
*/
export class ZeroTrustDnsLocation extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_dns_location";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDnsLocation to import
    * @param importFromId The id of the existing ZeroTrustDnsLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDnsLocation to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dns_location", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDnsLocationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dns_location',
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
        this._clientDefault = config.clientDefault;
        this._dnsDestinationIpsId = config.dnsDestinationIpsId;
        this._ecsSupport = config.ecsSupport;
        this._endpoints.internalValue = config.endpoints;
        this._name = config.name;
        this._networks.internalValue = config.networks;
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
    // client_default - computed: true, optional: true, required: false
    _clientDefault;
    get clientDefault() {
        return this.getBooleanAttribute('client_default');
    }
    set clientDefault(value) {
        this._clientDefault = value;
    }
    resetClientDefault() {
        this._clientDefault = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientDefaultInput() {
        return this._clientDefault;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // dns_destination_ips_id - computed: true, optional: true, required: false
    _dnsDestinationIpsId;
    get dnsDestinationIpsId() {
        return this.getStringAttribute('dns_destination_ips_id');
    }
    set dnsDestinationIpsId(value) {
        this._dnsDestinationIpsId = value;
    }
    resetDnsDestinationIpsId() {
        this._dnsDestinationIpsId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsDestinationIpsIdInput() {
        return this._dnsDestinationIpsId;
    }
    // dns_destination_ipv6_block_id - computed: true, optional: false, required: false
    get dnsDestinationIpv6BlockId() {
        return this.getStringAttribute('dns_destination_ipv6_block_id');
    }
    // doh_subdomain - computed: true, optional: false, required: false
    get dohSubdomain() {
        return this.getStringAttribute('doh_subdomain');
    }
    // ecs_support - computed: true, optional: true, required: false
    _ecsSupport;
    get ecsSupport() {
        return this.getBooleanAttribute('ecs_support');
    }
    set ecsSupport(value) {
        this._ecsSupport = value;
    }
    resetEcsSupport() {
        this._ecsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ecsSupportInput() {
        return this._ecsSupport;
    }
    // endpoints - computed: false, optional: true, required: false
    _endpoints = new ZeroTrustDnsLocationEndpointsOutputReference(this, "endpoints");
    get endpoints() {
        return this._endpoints;
    }
    putEndpoints(value) {
        this._endpoints.internalValue = value;
    }
    resetEndpoints() {
        this._endpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointsInput() {
        return this._endpoints.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ip - computed: true, optional: false, required: false
    get ip() {
        return this.getStringAttribute('ip');
    }
    // ipv4_destination - computed: true, optional: false, required: false
    get ipv4Destination() {
        return this.getStringAttribute('ipv4_destination');
    }
    // ipv4_destination_backup - computed: true, optional: false, required: false
    get ipv4DestinationBackup() {
        return this.getStringAttribute('ipv4_destination_backup');
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
    // networks - computed: true, optional: true, required: false
    _networks = new ZeroTrustDnsLocationNetworksList(this, "networks", false);
    get networks() {
        return this._networks;
    }
    putNetworks(value) {
        this._networks.internalValue = value;
    }
    resetNetworks() {
        this._networks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksInput() {
        return this._networks.internalValue;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            client_default: cdktf.booleanToTerraform(this._clientDefault),
            dns_destination_ips_id: cdktf.stringToTerraform(this._dnsDestinationIpsId),
            ecs_support: cdktf.booleanToTerraform(this._ecsSupport),
            endpoints: zeroTrustDnsLocationEndpointsToTerraform(this._endpoints.internalValue),
            name: cdktf.stringToTerraform(this._name),
            networks: cdktf.listMapper(zeroTrustDnsLocationNetworksToTerraform, false)(this._networks.internalValue),
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
            client_default: {
                value: cdktf.booleanToHclTerraform(this._clientDefault),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dns_destination_ips_id: {
                value: cdktf.stringToHclTerraform(this._dnsDestinationIpsId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ecs_support: {
                value: cdktf.booleanToHclTerraform(this._ecsSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            endpoints: {
                value: zeroTrustDnsLocationEndpointsToHclTerraform(this._endpoints.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDnsLocationEndpoints",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            networks: {
                value: cdktf.listMapperHcl(zeroTrustDnsLocationNetworksToHclTerraform, false)(this._networks.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDnsLocationNetworksList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
