import { LightningElement, wire } from "lwc";
import { getCurrentPageRef } from 'def';

/**
 * Show an item
 */
export default class Child extends LightningElement {
  // A private property for holding the full detail of the page reference
  //pageRef;  
  
  @wire(getCurrentPageRef) pageRef;
  //receivePageReference(result) {
  //  let today;
  //
  //  // Store the response for later use, as needed
  //  this.pageRef = result;
  //
  //  // Now you can perform your logic
  //  today = new Date().toISOString();//.toLocaleString('en-US', { timeZone: 'UTC' });
  //  console.log('receivePageReference for [Child] ... ' + today);
  //  registerListener('refresh', this.handleRefresh, this);
  //}

  connectedCallback() {
    var today = new Date().toISOString();//.toLocaleString('en-US', { timeZone: 'UTC' });
    console.log('connectedCallback() for [Child] ... ' + today);
  }

  disconnectedCallback(){
    let today = new Date().toISOString();//.toLocaleString('en-US', { timeZone: 'UTC' });
    console.log('disconnectedCallback() for [Child] ... ' + today);
  }
}
