using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Extensions.CosmosDB;

namespace Company.Function
{
    public static class ResumeCounterFunction
    {
        [FunctionName("GetResumeCounter")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [CosmosDB(databaseName: "AzureResume", collectionName: "Counter", ConnectionStringSetting = "AzureResumeConnectionString", Id = "1", PartitionKey = "1")] Counter counter,
            [CosmosDB(databaseName: "AzureResume", collectionName: "Counter", ConnectionStringSetting = "AzureResumeConnectionString")] out Counter updatedCounter,
            ILogger log)
        {
            // Eğer counter null ise, yeni bir Counter nesnesi oluştur
            if (counter == null)
            {
                counter = new Counter { Id = "1", Count = 1 };
            }
            else
            {
                // Sayaç değerini artır
                counter.Count += 1;
            }

            // Güncellenmiş Counter nesnesini geri döndürmek için atama yap
            updatedCounter = counter;

            // Counter nesnesini JSON'a çevir
            string JsonToReturn = JsonConvert.SerializeObject(counter);

            // Güncellenmiş Counter'ı HTTP yanıtı olarak döndür
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK)
            {
                Content = new StringContent(JsonToReturn, System.Text.Encoding.UTF8, "application/json")
            };
        }

        public class Counter
        {
            [JsonProperty("id")] // id özelliğinin CosmosDB tarafından tanınması için
            public string Id { get; set; }
            public int Count { get; set; }
        }
    }
}
