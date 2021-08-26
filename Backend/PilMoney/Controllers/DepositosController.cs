using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class DepositosController : ApiController
    {
        // GET: api/Depositos
        public IEnumerable<Depositos> Get()
        {
            GestorDepositos gDepositos = new GestorDepositos();
            return gDepositos.ListarDeposito();
        }

        // GET: api/Depositos/5
        public Depositos Get(int idDeposito)
        {
            GestorDepositos gDepositos = new GestorDepositos();
            return gDepositos.ObtenerDepositoPorId(idDeposito);
        }

        // POST: api/Depositos
        public HttpResponseMessage Post(Depositos d)
        {
            if (ModelState.IsValid)
            {
                GestorDepositos gDepositos = new GestorDepositos();
                gDepositos.RegistrarDeposito(d);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT: api/Depositos/5
        

        // DELETE: api/Depositos/5
        public void Delete(int idDeposito)
        {
            GestorDepositos gDepositos = new GestorDepositos();
            gDepositos.EliminarDeposito(idDeposito);
        }
    }
}
