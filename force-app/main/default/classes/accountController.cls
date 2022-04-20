public with sharing class accountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountById(Id accId){
        try {
            return [Select Id, Name, Phone FROM Account where Id=:accId];
        } catch (Exception e) {
            System.debug(e.getMessage());
            return null;
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        try {
            return [Select Id, Name FROM Account where AnnualRevenue=null LIMIT 5];
        } catch (Exception e) {
            System.debug(e.getMessage());
            return null;
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        try {
            return [Select Id, Name FROM Contact];
        } catch (Exception e) {
            System.debug(e.getMessage());
            return null;
        }
    }


}
