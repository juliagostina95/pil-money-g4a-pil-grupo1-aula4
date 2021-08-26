using PilMoney.Models;
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
        public IEnumerable<Transferencias> Get()
        {
            GestorTransferencias gTransferencia = new GestorTransferencias();
            return gTransferencia.ListarTransferencia();
        }

        // GET: api/Transferencias/5
        public Transferencias Get(int idTransferencia)
        {
            GestorTransferencias gTransferencia = new GestorTransferencias();
            return gTransferencia.ObtenerTransferenciasPorId(idTransferencia);
        }

        // POST: api/Transferencias
        public void Post(Transferencias t)
        {
            GestorTransferencias gTransferencia = new GestorTransferencias();
            gTransferencia.RegistrarTransferencia(t);
        }

        // PUT: api/Transferencias/5
        

        // DELETE: api/Transferencias/5
        public void Delete(int idTransferencia)
        {
            GestorTransferencias gTransferencia = new GestorTransferencias();
            gTransferencia.EliminarTransferencia(idTransferencia);
        }
    }
}
