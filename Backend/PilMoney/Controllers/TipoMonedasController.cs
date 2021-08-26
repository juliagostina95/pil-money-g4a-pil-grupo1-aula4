using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class TipoMonedasController : ApiController
    {
       
        // GET: api/TipoMonedas
        public IEnumerable<TipoMonedas> Get()
        {
            GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
            return gTipoMoneda.ObtenerTipoMoneda();
        }

        // POST: api/TipoMonedas
        public HttpResponseMessage Post(TipoMonedas tm)
        {
            if (ModelState.IsValid)
            {
                GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
                gTipoMoneda.RegistrarTipoMoneda(tm);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

        }

        // PUT: api/TipoMonedas/5
        public void Put(TipoMonedas tm)
        {
            GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
            gTipoMoneda.ModificarTipoMoneda(tm);
        }

        // DELETE: api/TipoMonedas/5
        public void Delete(int idTipoMoneda)
        {
            GestorTipoMonedas gTipoMoneda = new GestorTipoMonedas();
            gTipoMoneda.EliminarTipoMoneda(idTipoMoneda);
        }
    }
}
