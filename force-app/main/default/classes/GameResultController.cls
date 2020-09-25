public with sharing class GameResultController {
    @AuraEnabled
    public static List<Word_Shuffle__c> getResults() {
        String userId = UserInfo.getUserId();
        return [
            SELECT Id, Name, Result__c, Mode__c, CreatedDate
            FROM Word_Shuffle__c
            WHERE CreatedById = :userId
            ORDER BY CreatedDate DESC
        ];
    }
}
