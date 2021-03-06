/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ProjectPImage from './ProjectPImage';

/**
 * The Project model module.
 * @module model/Project
 * @version 1.0.0
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * @alias module:model/Project
     * @param pTitle {String} 
     * @param pImage {module:model/ProjectPImage} 
     * @param pStart {String} 
     * @param pEnd {Date} 
     * @param pDescription {String} 
     */
    constructor(pTitle, pImage, pStart, pEnd, pDescription) { 
        
        Project.initialize(this, pTitle, pImage, pStart, pEnd, pDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pTitle, pImage, pStart, pEnd, pDescription) { 
        obj['pTitle'] = pTitle;
        obj['pImage'] = pImage;
        obj['pStart'] = pStart;
        obj['pEnd'] = pEnd;
        obj['pDescription'] = pDescription;
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('pTitle')) {
                obj['pTitle'] = ApiClient.convertToType(data['pTitle'], 'String');
            }
            if (data.hasOwnProperty('pImage')) {
                obj['pImage'] = ProjectPImage.constructFromObject(data['pImage']);
            }
            if (data.hasOwnProperty('pStart')) {
                obj['pStart'] = ApiClient.convertToType(data['pStart'], 'String');
            }
            if (data.hasOwnProperty('pEnd')) {
                obj['pEnd'] = ApiClient.convertToType(data['pEnd'], 'Date');
            }
            if (data.hasOwnProperty('pDescription')) {
                obj['pDescription'] = ApiClient.convertToType(data['pDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Project.prototype['_id'] = undefined;

/**
 * @member {String} pTitle
 */
Project.prototype['pTitle'] = undefined;

/**
 * @member {module:model/ProjectPImage} pImage
 */
Project.prototype['pImage'] = undefined;

/**
 * @member {String} pStart
 */
Project.prototype['pStart'] = undefined;

/**
 * @member {Date} pEnd
 */
Project.prototype['pEnd'] = undefined;

/**
 * @member {String} pDescription
 */
Project.prototype['pDescription'] = undefined;






export default Project;

