-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "campaignId" TEXT NOT NULL,
    "campaignName" TEXT NOT NULL,
    "subjectLine" TEXT NOT NULL,
    "emailContent" TEXT NOT NULL,
    "senderEmail" TEXT NOT NULL
);
