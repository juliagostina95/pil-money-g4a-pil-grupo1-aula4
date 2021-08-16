using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PilMoney.Models;

namespace PilMoney.Controllers
{
    public class TransferenciasController : Controller
    {
        private PilMoneyEntities db = new PilMoneyEntities();

        // GET: Transferencias
        public ActionResult Index()
        {
            var transferencias = db.Transferencias.Include(t => t.Contactos).Include(t => t.Cuentas);
            return View(transferencias.ToList());
        }

        // GET: Transferencias/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Transferencias transferencias = db.Transferencias.Find(id);
            if (transferencias == null)
            {
                return HttpNotFound();
            }
            return View(transferencias);
        }

        // GET: Transferencias/Create
        public ActionResult Create()
        {
            ViewBag.idContacto = new SelectList(db.Contactos, "idContacto", "CVUContacto");
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias");
            return View();
        }

        // POST: Transferencias/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "idTransferencia,Fecha,Importe,idContacto,CVU,CVUDestino,AliasDestino")] Transferencias transferencias)
        {
            if (ModelState.IsValid)
            {
                db.Transferencias.Add(transferencias);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.idContacto = new SelectList(db.Contactos, "idContacto", "CVUContacto", transferencias.idContacto);
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", transferencias.CVU);
            return View(transferencias);
        }

        // GET: Transferencias/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Transferencias transferencias = db.Transferencias.Find(id);
            if (transferencias == null)
            {
                return HttpNotFound();
            }
            ViewBag.idContacto = new SelectList(db.Contactos, "idContacto", "CVUContacto", transferencias.idContacto);
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", transferencias.CVU);
            return View(transferencias);
        }

        // POST: Transferencias/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "idTransferencia,Fecha,Importe,idContacto,CVU,CVUDestino,AliasDestino")] Transferencias transferencias)
        {
            if (ModelState.IsValid)
            {
                db.Entry(transferencias).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.idContacto = new SelectList(db.Contactos, "idContacto", "CVUContacto", transferencias.idContacto);
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", transferencias.CVU);
            return View(transferencias);
        }

        // GET: Transferencias/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Transferencias transferencias = db.Transferencias.Find(id);
            if (transferencias == null)
            {
                return HttpNotFound();
            }
            return View(transferencias);
        }

        // POST: Transferencias/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Transferencias transferencias = db.Transferencias.Find(id);
            db.Transferencias.Remove(transferencias);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
