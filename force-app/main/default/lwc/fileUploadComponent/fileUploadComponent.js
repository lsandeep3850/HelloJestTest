import { LightningElement, api } from 'lwc';

import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class FileUploadComponent extends LightningElement {

    @api recordId;

    get acceptedFormats(){
        return ['.pdf','.jpeg'];
    }
    handleUploadFinished(event){
        console.log('Hello entered');
        const uploadedFiles=event.detail.files;
        let uploadedFileNames='';
        for(let i=0;i<uploadedFiles.length;i++){
            uploadedFileNames += uploadedFiles[i].name+', ';
        }
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: uploadedFiles.length+ ' Files Uploaded Sucessfully '+ uploadedFileNames,
                variant:'success',
            }),
        );

    }

}