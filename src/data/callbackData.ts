export const callbackData = [
  {
    "name": "CallbackRequest",
    "type": "CallbackRequest",
    "description": "Wrapper element for all callback elements."
  },
  {
    "name": "Username",
    "type": "string",
    "description": "The username defined when a URL was registered for the callback service, or an empty element if no username was defined."
  },
  {
    "name": "Password",
    "type": "string",
    "description": "The password defined when a registered for the callback service, or an empty element if no password was defined."
  },
  {
    "name": "RequestId",
    "type": "string",
    "description": "A unique string that matches the RequestId returned in the synchronous response to the original API request. A  separate callback message is sent for each device that matched the  request criteria, indicating whether the operation succeeded for that  device. All of the callback messages will have the same RequestId."
  },
  {
    "name": "Device",
    "type": "DeviceIdentifier",
    "description": "The device that was changed."
  },
  {
    "name": "Kind",
    "type": "string",
    "description": "The type of the device identifier. Valid types of identifiers are:   ESN (decimal)   MDN   MEID (hexadecimal)   MIN   MSISDN"
  },
  {
    "name": "Identifier",
    "type": "string",
    "description": "The value of the device identifier."
  },
  {
    "name": "Data",
    "type": "CallbackData",
    "description": "The data elements for this callback."
  },
  {
    "name": "CarrierService",
    "type": "CarrierServiceCallbackRequest",
    "description": "The data returned from a CarrierService API request."
  },
  {
    "name": "ChangeDeviceCustomFields",
    "type": "ChangeDeviceCustomFieldsResponse",
    "description": "Empty in callback messages for ChangeDeviceIdentifier requests. Null for other CarrierService callback messages."
  },
  {
    "name": "ChangeDeviceIdentifier",
    "type": "ChangeDeviceIdentifierResponse",
    "description": "Contains the new device identifier for successful  ChangeDeviceIdentifier requests. Null for other CarrierService callback  messages."
  },
  {
    "name": "DeviceIdentifierChanged",
    "type": "DeviceIdentifier",
    "description": "The new device identifier"
  },
  {
    "name": "Kind",
    "type": "string",
    "description": "The type of the device identifier. Valid types of identifiers are:   ESN (decimal)   MDN   MEID (hexadecimal)   MIN   MSISDN"
  },
  {
    "name": "Identifier",
    "type": "string",
    "description": "The value of the device identifier."
  },
  {
    "name": "ServicePlan",
    "type": "string",
    "description": "The name of the new service plan for the device, if the service plan was changed."
  },
  {
    "name": "CallbackCount",
    "type": "integer",
    "description": "The number of times this callback message has been sent."
  },
  {
    "name": "MaxCallbackThreshold",
    "type": "integer",
    "description": "The maximum number of times this callback message will be sent if it is not correctly acknowledged."
  }
]
