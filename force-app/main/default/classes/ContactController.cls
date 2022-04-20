public class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactLists()
    {
        return [SELECT Name from Contact];
    }

}
