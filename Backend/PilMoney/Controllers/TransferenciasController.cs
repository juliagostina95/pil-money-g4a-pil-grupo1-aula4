using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class TransferenciasController : ApiController
    {
        // GET: api/Transferencias
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Transferencias/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Transferencias
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Transferencias/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Transferencias/5
        public void Delete(int id)
        {
        }
    }
}
